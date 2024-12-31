import { Voting, Candidate } from '../models/voting.js';
import { Vote } from '../models/vote.js';
import { User } from '../models/user.js';
import { Session } from '../models/session.js';
import {
  retractVote,
  deleteVoting,
  getVoting,
  castVote,
  closeVoting,
  openVoting,
  getResult,
  addVoting
} from './votings.js';

jest.mock('../models/voting');
jest.mock('../models/vote');
jest.mock('../models/user');
jest.mock('../models/session');

describe('Votings Controller', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      params: { id: 1 },
      body: {},
      userId: 1,
      headers: { authorization: 'Bearer token' },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  describe('retractVote', () => {
    it('should retract a vote successfully', async () => {
      Vote.retractVote.mockResolvedValue();

      await retractVote(req, res, next);

      expect(Vote.retractVote).toHaveBeenCalledWith(1, 1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Vote retracted successfully',
      });
    });

    it('should handle errors', async () => {
      const error = new Error('Test error');
      Vote.retractVote.mockRejectedValue(error);

      await retractVote(req, res, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'An error occurred while retracting the vote',
      });
    });
  });

  describe('deleteVoting', () => {
    it('should delete a voting successfully', async () => {
      Voting.deleteVoting.mockResolvedValue();

      await deleteVoting(req, res, next);

      expect(Voting.deleteVoting).toHaveBeenCalledWith(1, 1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ redirect: '/' });
    });

    it('should handle errors', async () => {
      const error = new Error('Test error');
      Voting.deleteVoting.mockRejectedValue(error);

      await deleteVoting(req, res, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'An error occurred while deleting the voting',
      });
    });
  });

  describe('addVoting', () => {
    it('should add a voting successfully', async () => {
      Voting.createWithCandidates.mockResolvedValue({ dataValues: { id: 1 } });

      req.body = {
        surveyTitle: 'Test Title',
        surveyDescription: 'Test Description',
        options: ['Option 1', 'Option 2'],
      };

      await addVoting(req, res, next);

      expect(Voting.createWithCandidates).toHaveBeenCalledWith(
        'Test Title',
        'Test Description',
        1,
        ['Option 1', 'Option 2'],
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ redirect: '/voting/1' });
    });

    it('should handle errors', async () => {
      const error = new Error('Test error');
      Voting.createWithCandidates.mockRejectedValue(error);

      await addVoting(req, res, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error saving voting' });
    });
  });

  describe('castVote', () => {
    it('should cast a vote successfully', async () => {
      Voting.incrementVotes.mockResolvedValue();

      req.body = { candidateId: 1 };

      await castVote(req, res, next);

      expect(Voting.incrementVotes).toHaveBeenCalledWith(1, 1, 1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Vote casted successfully',
      });
    });

    it('should handle errors', async () => {
      const error = new Error('Test error');
      Voting.incrementVotes.mockRejectedValue(error);

      await castVote(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: error.message });
    });
  });

  describe('closeVoting', () => {
    it('should close a voting successfully', async () => {
      Voting.closeVoting.mockResolvedValue();

      await closeVoting(req, res, next);

      expect(Voting.closeVoting).toHaveBeenCalledWith(1, 1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Voting closed successfully',
      });
    });

    it('should handle errors', async () => {
      const error = new Error('Test error');
      Voting.closeVoting.mockRejectedValue(error);

      await closeVoting(req, res, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'An error occurred while closing the voting',
      });
    });
  });

  describe('openVoting', () => {
    it('should open a voting successfully', async () => {
      Voting.openVoting.mockResolvedValue();

      await openVoting(req, res, next);

      expect(Voting.openVoting).toHaveBeenCalledWith(1, 1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Voting opened successfully',
      });
    });

    it('should handle errors', async () => {
      const error = new Error('Test error');
      Voting.openVoting.mockRejectedValue(error);

      await openVoting(req, res, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Error opening voting',
      });
    });
  });

  describe('getResult', () => {
    it('should get voting results successfully', async () => {
      Voting.findByPk.mockResolvedValue({ id: 1, title: 'Test Voting' });
      Candidate.findAll.mockResolvedValue([{ id: 1, name: 'Candidate 1' }]);

      await getResult(req, res, next);

      expect(Voting.findByPk).toHaveBeenCalledWith(1, {
        include: [{ model: User, as: 'creator' }],
      });
      expect(Candidate.findAll).toHaveBeenCalledWith({
        where: { votingId: 1 },
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        voting: { id: 1, title: 'Test Voting' },
        candidates: [{ id: 1, name: 'Candidate 1' }],
        userId: 'token',
      });
    });

    it('should handle errors', async () => {
      const error = new Error('Test error');
      Voting.findByPk.mockRejectedValue(error);

      await getResult(req, res, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'An error occurred while fetching the data',
      });
    });
  });

  describe('getVoting', () => {
    it('should get a voting successfully', async () => {
      Session.fetchByToken.mockResolvedValue({ userId: 1 });
      Voting.findByPk.mockResolvedValue({ id: 1, title: 'Test Voting' });
      Candidate.findAll.mockResolvedValue([{ id: 1, name: 'Candidate 1' }]);
      Vote.findOne.mockResolvedValue({ dataValues: { candidateId: 1 } });

      await getVoting(req, res, next);

      expect(Session.fetchByToken).toHaveBeenCalledWith('token');
      expect(Voting.findByPk).toHaveBeenCalledWith(1, {
        include: [{ model: User, as: 'creator' }],
      });
      expect(Candidate.findAll).toHaveBeenCalledWith({
        where: { votingId: 1 },
      });
      expect(Vote.findOne).toHaveBeenCalledWith({
        where: { votingId: 1, userId: 1 },
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        voting: { id: 1, title: 'Test Voting' },
        candidates: [{ id: 1, name: 'Candidate 1' }],
        vote: { candidateId: 1 },
        userId: 1,
      });
    });

    it('should handle errors', async () => {
      const error = new Error('Test error');
      Voting.findByPk.mockRejectedValue(error);

      await getVoting(req, res, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'An error occurred while fetching the data',
      });
    });

    it('should return 404 if voting not found', async () => {
      Voting.findByPk.mockResolvedValue(null);

      await getVoting(req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Voting not found' });
    });

    it('should handle missing token', async () => {
      req.headers['authorization'] = null;
      Voting.findByPk.mockResolvedValue({ id: 1, title: 'Test Voting' });
      Candidate.findAll.mockResolvedValue([{ id: 1, name: 'Candidate 1' }]);

      await getVoting(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        voting: { id: 1, title: 'Test Voting' },
        candidates: [{ id: 1, name: 'Candidate 1' }],
        vote: undefined,
        userId: null,
      });
    });
  });
});

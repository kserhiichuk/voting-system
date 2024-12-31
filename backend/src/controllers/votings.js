import { Voting, Candidate } from '../models/voting.js';
import { Vote } from '../models/vote.js';
import { User } from '../models/user.js';
import { Session } from '../models/session.js';

export const getVoting = async (req, res, next) => {
  const votingId = req.params.id;
  const tokenString = req.headers['authorization']
    ? req.headers['authorization']
    : null;
  let userId = null;
  const token = tokenString && tokenString.split(' ')[1];
  try {
    if (token) {
      let session = await Session.fetchByToken(token);
      if (session) {
        userId = session.userId;
      }
    }
    const voting = await Voting.findByPk(votingId, {
      include: [{ model: User, as: 'creator' }],
    });
    if (!voting) {
      return res.status(404).json({ message: 'Voting not found' });
    }
    const candidates = await Candidate.findAll({ where: { votingId } });
    let vote;
    if (userId) {
      vote = await Vote.findOne({
        where: { votingId: votingId, userId: userId },
      });
    }
    vote = vote ? vote.dataValues : undefined;
    res.status(200).json({
      voting,
      candidates,
      vote,
      userId,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching the data' });
  }
};

export const addVoting = async (req, res, next) => {
  const title = req.body.surveyTitle;
  const description = req.body.surveyDescription;
  const options = req.body.options;
  const userId = req.userId;
  try {
    const result = await Voting.createWithCandidates(
      title,
      description,
      userId,
      options,
    );
    res.status(200).json({ redirect: `/voting/${result.dataValues.id}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving voting' });
  }
};

export const castVote = async (req, res, next) => {
  const votingId = req.params.id;
  const candidateId = req.body.candidateId;
  const userId = req.userId;
  try {
    await Voting.incrementVotes(votingId, candidateId, userId);
    res.status(200).json({ message: 'Vote casted successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

export const closeVoting = async (req, res, next) => {
  const votingId = req.params.id;
  const userId = req.userId;
  try {
    await Voting.closeVoting(votingId, userId);
    res.status(200).json({ message: 'Voting closed successfully' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while closing the voting' });
  }
};

export const openVoting = async (req, res, next) => {
  const votingId = req.params.id;
  const userId = req.userId;
  try {
    await Voting.openVoting(votingId, userId);
    res.status(200).json({ message: 'Voting opened successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error opening voting' });
  }
};

export const getResult = async (req, res, next) => {
  const votingId = req.params.id;
  const tokenString = req.headers['authorization']
    ? req.headers['authorization']
    : null;
  try {
    const voting = await Voting.findByPk(votingId, {
      include: [{ model: User, as: 'creator' }],
    });
    if (!voting) {
      return res.status(404).json({ message: 'Voting not found' });
    }
    const candidates = await Candidate.findAll({ where: { votingId } });
    const token = tokenString && tokenString.split(' ')[1];
    res.status(200).json({
      voting,
      candidates,
      userId: token,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching the data' });
  }
};

export const retractVote = async (req, res, next) => {
  const votingId = req.params.id;
  const userId = req.userId;
  try {
    await Vote.retractVote(votingId, userId);
    res.status(200).json({ message: 'Vote retracted successfully' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while retracting the vote' });
  }
};

export const deleteVoting = async (req, res, next) => {
  const votingId = req.params.id;
  const userId = req.userId;
  try {
    await Voting.deleteVoting(votingId, userId);
    res.status(200).json({ redirect: `/` });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while deleting the voting' });
  }
};

import Sequelize from 'sequelize';
import sequelize from '../util/database.js';
import { Voting, Candidate } from '../models/voting.js';

const Vote = sequelize.define('Vote', {
  votingId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  candidateId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Vote.findbyVotingIdandUserId = async (votingId, userId) => {
  return await Vote.findOne({
    where: { votingId, userId },
  });
};

Vote.destroyVotes = async (votingId, transaction) => {
  return await Vote.destroy({
    where: { votingId: votingId },
    transaction,
  });
};

Vote.retractVote = async (votingId, userId) => {
  const transaction = await sequelize.transaction();

  try {
    const voting = await Voting.findById(votingId);
    if (!voting || voting.status == 'closed') {
      throw new Error(`Voting with ID ${votingId} not found or closed`);
    }
    const vote = await Vote.findbyVotingIdandUserId(votingId, userId);

    if (!vote) {
      throw new Error('Vote not found');
    }

    const candidateId = vote.candidateId;

    await vote.destroy({ transaction });

    const candidate = await Candidate.findByPk(candidateId);
    await candidate.decrement('votesNum', { by: 1, transaction });

    await voting.decrement('votesNum', { by: 1, transaction });

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    throw error;
  }
};

export { Vote };

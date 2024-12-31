const { Voting, Candidate } = require('../models/voting');
const Vote = require('../models/vote');

exports.getVoting = async (req, res, next) => {
  const votingId = req.params.id;
  const userId = req.cookies.userId ? req.cookies.userId : null;
  Promise.all([
    Voting.fetchVotingwithCreatorById(votingId),
    Candidate.fetchByVotingId(votingId),
    Vote.fetchByVotingIdAndUserId(votingId, userId),
  ])
    .then(([[rows, fieldData], [candidates], [voteRows, voteFields]]) => {
      if (!rows.length) {
        return res.status(404).send('Voting not found');
      }
      const voting = rows[0];
      const creatorName = voting.creator_name;
      res.render('voting', {
        voting,
        candidates,
        vote: voteRows,
        userId,
        creatorName,
        req,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while fetching the data');
    });
};

exports.addVoting = async (req, res, next) => {
  const userId = req.cookies.userId;
  try {
    const votingId = await Voting.createWithCandidates(
      req.body.surveyTitle,
      req.body.surveyDescription,
      userId,
      req.body.options,
    );

    res.redirect(`/voting/${votingId}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving voting');
  }
};

exports.castVote = async (req, res, next) => {
  const votingId = req.params.id;
  const candidateId = req.body.candidateId;
  const userId = req.cookies.userId;

  try {
    await Voting.incrementVotes(votingId, candidateId, userId);
    res.status(200).send('Vote casted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while casting the vote');
  }
};

exports.closeVoting = async (req, res, next) => {
  const votingId = req.params.id;
  const userId = req.cookies.userId;

  try {
    await Voting.closeVoting(votingId, userId);
    res.status(200).send('Voting closed successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while closing the voting');
  }
};

exports.openVoting = async (req, res, next) => {
  const votingId = req.params.id;
  const userId = req.cookies.userId;
  try {
    await Voting.openVoting(votingId, userId);
    res.status(200).send('Voting opened successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error opening voting');
  }
};

exports.getResult = async (req, res, next) => {
  const votingId = req.params.id;
  const userId = req.cookies.userId ? req.cookies.userId : null;
  Promise.all([
    Voting.fetchVotingwithCreatorById(votingId),
    Candidate.fetchByVotingId(votingId),
  ])
    .then(([[rows, fieldData], [candidates]]) => {
      if (!rows.length) {
        return res.status(404).send('Voting not found');
      }
      const voting = rows[0];
      const creatorName = voting.creator_name;
      res.render('votingRes', { voting, candidates, creatorName, req, userId });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while fetching the data');
    });
};

exports.retractVote = async (req, res, next) => {
  const votingId = req.params.id;
  const userId = req.cookies.userId;

  try {
    await Vote.retractVote(votingId, userId);
    res.status(200).send('Vote retracted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retracting the vote');
  }
};

exports.deleteVoting = async (req, res, next) => {
  const votingId = req.params.id;
  const userId = req.cookies.userId;
  try {
    await Voting.deleteVoting(votingId, userId);
    res.redirect(`/`);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while deleting the voting');
  }
};

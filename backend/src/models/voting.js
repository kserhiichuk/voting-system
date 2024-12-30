const db = require('../util/database');

class Voting {
  constructor(title, description, createdById, createdBy) {
    this.candidates = [];
    (async () => {
      try {
        const nextId = await Voting.fetchNextId();
        this.id = nextId;
        this.title = title;
        this.description = description;
        this.status = 'active';
        this.createdById = createdById;
        this.createdBy = createdBy;
        this.votes = 0;
      } catch (err) {
        console.error(err);
      }
    })();
  }

  addCandidate(name) {
    const candidateId = this.candidates.length + 1;
    const candidate = new Candidate(candidateId, name);
    this.candidates.push(candidate);
  }

  static async closeVoting(votingId, userId) {
    try {
      const votings = await getVotingsFromFile();
      const voting = votings.find((voting) => voting.id == votingId);
      if (!voting) {
        throw new Error('Voting not found');
      }
      if (voting.createdById != userId) {
        throw new Error('Unauthorized to close this voting');
      }
      voting.status = 'closed';
      await Voting.writeVotingsToFile(votings);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async openVoting(votingId, userId) {
    try {
      const votings = await getVotingsFromFile();
      const voting = votings.find((voting) => voting.id == votingId);
      if (!voting) {
        throw new Error('Voting not found');
      }
      if (voting.createdById != userId) {
        throw new Error('Unauthorized to open this voting');
      }
      voting.status = 'active';
      await Voting.writeVotingsToFile(votings);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static incrementVotes(votingId, candidateId) {
    return new Promise((resolve, reject) => {
      getVotingsFromFile((err, votings) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
        const voting = votings.find((voting) => voting.id == votingId);
        if (!voting) {
          reject(new Error(`Voting with ID ${votingId} not found`));
          return;
        }
        if (voting.status != 'active') {
          reject(new Error('Voting is not active'));
          return;
        }
        const candidate = voting.candidates.find(
          (candidate) => candidate.id == candidateId,
        );
        if (!candidate) {
          reject(
            new Error(
              `Candidate with ID ${candidateId} not found in voting ${votingId}`,
            ),
          );
          return;
        }
        candidate.votes++;
        voting.votes++;
        Voting.writeVotingsToFile(votings)
          .then(() => resolve())
          .catch((err) => reject(err));
      });
    });
  }

  static fromObject(obj) {
    const voting = new Voting(
      obj.title,
      obj.description,
      obj.createdById,
      obj.createdBy,
    );
    voting.id = obj.id;
    voting.candidates = obj.candidates;
    voting.status = obj.status;
    voting.votes = obj.votes;
    return voting;
  }

  save() {
    return new Promise((resolve, reject) => {
      getVotingsFromFile((err, votings) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
        votings.push(this);
        Voting.writeVotingsToFile(votings)
          .then(() => resolve())
          .catch((err) => reject(err));
      });
    });
  }

  static fetchNextId = async () => {
    const votings = await getVotingsFromFile();
    let nextId = 1;
    if (votings.length > 0) {
      const lastVote = votings[votings.length - 1];
      nextId = lastVote.id + 1;
    }
    return nextId;
  };

  static fetchAll() {
    return db.execute(
      `SELECT votings.*, users.name AS creator_name
       FROM votings
       INNER JOIN users ON votings.user_id = users.id
       ORDER BY votings.created_at DESC`,
    );
  }

  static fetchById(id) {
    return db.execute(
      `SELECT votings.*, users.name AS creator_name
       FROM votings
       INNER JOIN users ON votings.user_id = users.id
       WHERE votings.id = ?`,
      [id],
    );
  }

  static writeVotingsToFile(votings) {
    return new Promise((resolve, reject) => {
      fs.writeFile(p, JSON.stringify(votings), (err) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

class Candidate {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.votes = 0;
  }

  static fetchByVotingId(id) {
    return db.execute(`SELECT * FROM candidates WHERE voting_id = ?`, [id]);
  }
}

module.exports = { Voting, Candidate };

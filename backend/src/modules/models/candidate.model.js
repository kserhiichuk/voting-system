export class Candidate {
    constructor(id, name, votes, votingId) {
      this.id = id;
      this.name = name;
      this.votes = votes;
      this.votingId = votingId;
    }
  
    getId() {
      return this.id;
    }
  
    getName() {
      return this.name;
    }
  
    setName(name) {
      this.name = name;
    }
  
    getVotes() {
      return this.votes;
    }
  
    incrementVotes() {
      this.votes++;
    }
  
    decrementVotes() {
      this.votes--;
    }
  
    getVotingId() {
      return this.votingId;
    }
  
    setVotingId(votingId) {
      this.votingId = votingId;
    }
  }
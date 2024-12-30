export class Vote {
    constructor(id, votingId, candidateId, userId) {
      this.id = id;
      this.votingId = votingId;
      this.candidateId = candidateId;
      this.userId = userId;
    }
  
    getId() {
      return this.id;
    }
  
    setId(id) {
      this.id = id;
    }
  
    getVotingId() {
      return this.votingId;
    }
  
    setVotingId(votingId) {
      this.votingId = votingId;
    }
  
    getCandidateId() {
      return this.candidateId;
    }
  
    setCandidateId(candidateId) {
      this.candidateId = candidateId;
    }
  
    getUserId() {
      return this.userId;
    }
  
    setUserId(userId) {
      this.userId = userId;
    }
  }
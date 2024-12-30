export class Voting {
    constructor(id, title, description, active, creatorUserId) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.active = active;
      this.creatorUserId = creatorUserId;
      this.candidates = [];
      this.votes = [];
    }
  
    getId() {
      return this.id;
    }
  
    setId(id) {
      this.id = id;
    }
  
    getTitle() {
      return this.title;
    }
  
    setTitle(title) {
      this.title = title;
    }
  
    getDescription() {
      return this.description;
    }
  
    setDescription(description) {
      this.description = description;
    }
  
    isActive() {
      return this.active;
    }
  
    setActive(active) {
      this.active = active;
    }
  
    getCreatorUserId() {
      return this.creatorUserId;
    }
  
    setCreatorUserId(creatorUserId) {
      this.creatorUserId = creatorUserId;
    }
  
    getCandidates() {
      return this.candidates;
    }
  
    setCandidates(candidates) {
      this.candidates = candidates;
    }
  
    getVotes() {
      return this.votes;
    }
  
    setVotes(votes) {
      this.votes = votes;
    }
  }
  
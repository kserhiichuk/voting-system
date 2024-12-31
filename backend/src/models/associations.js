import Sequelize from 'sequelize';
import sequelize from '../util/database.js';

import { Voting, Candidate } from '../models/voting.js';
import { User } from '../models/user.js';
import { Vote } from '../models/vote.js';
import { Session } from '../models/session.js';

User.hasMany(Vote, { foreignKey: 'userId' });
User.hasMany(Voting, { foreignKey: 'userId' });

Voting.hasMany(Vote, { foreignKey: 'votingId' });
Voting.belongsTo(User, { as: 'creator', foreignKey: 'userId' });
Candidate.hasMany(Vote, { foreignKey: 'candidateId' });

User.hasMany(Session, { foreignKey: 'userId' });
Session.belongsTo(User, { foreignKey: 'userId' });

Voting.hasMany(Candidate, { foreignKey: 'votingId', onDelete: 'CASCADE' }); // automatically delete all the child records that reference the parent record when the parent record is deleted
Candidate.belongsTo(Voting, { foreignKey: 'votingId', onDelete: 'CASCADE' });
Vote.belongsTo(Voting, { foreignKey: 'votingId', onDelete: 'CASCADE' });
Vote.belongsTo(Candidate, { foreignKey: 'candidateId', onDelete: 'CASCADE' });
Vote.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

import bcrypt from 'bcrypt';
import Sequelize from 'sequelize';
import sequelize from '../util/database.js';

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.createUser = async (name, login, password) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name: name,
    login: login,
    password: hashedPassword,
  });
  return user;
};

User.fetchByLogin = async (login) => {
  const user = await User.findOne({ where: { login } });
  return user;
};

User.comparePassword = (password, storedPassword) => {
  return bcrypt.compare(password, storedPassword);
};

export { User };

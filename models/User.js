//DEPENDENCIES
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// create User model
class User extends Model {
    // check login password
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        //validate password length
        validate: {
            len: [8]
        }
    }
  },
  {

    hooks: {

        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
            
        },

        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
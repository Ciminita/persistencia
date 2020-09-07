const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Model = Sequelize.Model;
class User extends Model {}
  User.init({
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'user'
  });

//insercion de un registro
sequelize.sync()
.then(() => User.create({
  firstName: 'Barbara',
  lastName: 'Cimino'
}))
.then(jane => {
  console.log(jane.toJSON());
});

//Actualización de un registro.
User.update({ firstName: "XXXXXXX" }, {
    where: {
      lastName: 'Maria'
    }
  }).then(() => {
    console.log('Dominguez');
  });



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

//inserción y actualización de varios registros.

sequelize.sync()
  .then(() => User.create({
    firstName: 'Barbara', 
    lastName: 'Cimino',
 
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

sequelize.sync()
  .then(() => User.create({
    firstName: 'Jorge', 
    lastName: 'Gutierrez',
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

sequelize.sync()
  .then(() => User.create({
    firstName: 'Alfonso', 
    lastName: 'Alonso',
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });  

//fue la manera que pense que podia ser, ya que probe con updateAll para actualizar todos, pero me decia que no existia esa funcion.

  

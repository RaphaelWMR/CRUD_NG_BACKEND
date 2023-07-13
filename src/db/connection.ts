import { Sequelize } from 'sequelize';

// Contraseña
const sequelize = new Sequelize('almacen', 'root', 'moreno123', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;
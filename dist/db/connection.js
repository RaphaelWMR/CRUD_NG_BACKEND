"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Contraseña
const sequelize = new sequelize_1.Sequelize('almacen', 'root', 'moreno123', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;

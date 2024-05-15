import Sequelize from "sequelize";

import { sequelize } from "./db.js";

export const MeuBanco = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    idade: {
        type: Sequelize.INTEGER,
    },
})
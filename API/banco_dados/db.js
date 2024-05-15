import Sequelize from "sequelize";

export const sequelize = new Sequelize('meubanco','root','shavershian',{
    host:'localhost',
    dialect:'mysql',
});

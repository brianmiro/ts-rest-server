import { Sequelize } from 'sequelize'; 

const db = new Sequelize('node_course', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
});

export default db;

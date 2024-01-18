module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define('article', {
        id: {
            type: Sequelize.STRING,
            autoIncrement: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        time: {
            type: Sequelize.DATE,
            allowNull: false
        },
    });

    return Article;
}
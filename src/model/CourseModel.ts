import * as Sequelize from "sequelize";

export function initCourseModel(sequelize: Sequelize.Sequelize){
  return sequelize.define('Course', {
    description: Sequelize.STRING,
    url: Sequelize.STRING,
    longDescription: Sequelize.TEXT,
    iconUrl: Sequelize.STRING,
    courseListIcon: Sequelize.STRING,
    seqNo: Sequelize.INTEGER,
    comingSoon: Sequelize.BOOLEAN,
    isNew: Sequelize.BOOLEAN,
    isOngoing: Sequelize.BOOLEAN
  });
}

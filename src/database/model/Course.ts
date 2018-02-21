import * as Sequelize from "sequelize";
import { Model } from "./model";

export class Course extends Model {

  private static instance: Course;

  private constructor(sequelize: Sequelize.Sequelize){
    super(sequelize, 'Course', {
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
    console.log('istanza corsi creata...');
  }

  static getInstance(sequelize: Sequelize.Sequelize) {
    if (!Course.instance) {
      Course.instance = new Course(sequelize);
        // ... altre inizializzazioni?
    }
    return Course.instance;
  }


}


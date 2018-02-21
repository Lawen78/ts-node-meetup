import * as Sequelize from 'sequelize';

export class Model implements Query{
    private table: Sequelize.Model<{}, {}>;

    constructor(public sequelize: Sequelize.Sequelize, public tableName: string, public options: {}){
        this.table = sequelize.define(tableName, options);
    }

    queryFindAll(options?:{}): Promise<{}[]>{
        return this.table.findAll(options);
    }
}
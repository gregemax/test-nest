import { DataSource, DataSourceOptions } from "typeorm"

export const datasourceOption: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'gregemax700@gmail.com',
  //validate:false,
  database: 'greg',
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/db/migrations/*js'],
};

const datasorce = new DataSource(datasourceOption)

export default datasorce
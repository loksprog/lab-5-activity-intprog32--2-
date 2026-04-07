// import { Sequelize } from "sequelize";
// import { initAccountModel, Account } from "../models/account.model";
// import { initDepartmentModel, Department } from "../models/department.model";
// import { initEmployeeModel, Employee } from "../models/employee.model";
// import { initRequestModel, Request } from "../models/request.model";
// import config from "../../config.json";

// export interface Database {
//   sequelize: Sequelize;
//   Account: typeof Account;
//   Department: typeof Department;
//   Employee: typeof Employee;
//   Request: typeof Request;
// }

// export const db = {} as Database;

// export async function initialize(): Promise<void> {
//   const { host, port, user, password, database } = config.database;

//   const sequelize = new Sequelize(database, user, password, {
//     host,
//     port,
//     dialect: "mysql",
//     logging: false,
//   });

//   await sequelize.authenticate();

//   // Initialize models
//   db.sequelize = sequelize;
//   db.Account = initAccountModel(sequelize);
//   db.Department = initDepartmentModel(sequelize);
//   db.Employee = initEmployeeModel(sequelize);
//   db.Request = initRequestModel(sequelize);

//   // Set up associations
//   db.Employee.belongsTo(db.Department, { foreignKey: "departmentId", as: "department" });
//   db.Department.hasMany(db.Employee, { foreignKey: "departmentId", as: "employees" });

//   await sequelize.sync({ alter: true });
//   console.log("✅ Database initialized and models synced");
// }
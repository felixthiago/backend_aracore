// import { openDB } from "../configDB.js" 

// export async function getAllRow(tableName){
//     try {
//         const db = await openDB();
//         console.log(`Retrieved data from ${tableName}`)
//         return db.all(`SELECT * FROM ${tableName} LIMIT 100`);
//     } catch (error) {
//         console.log("Error fetching data from table: ", error);
//         throw error
//     }
// }
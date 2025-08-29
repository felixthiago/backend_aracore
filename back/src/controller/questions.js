import { openDB } from "../configDB.js";

// CRUD Questions

export async function getQuestions(q_id = null){
    try {
        const db = await openDB();

        let query = `SELECT * FROM questions`;
        const params = [];

        if (q_id !== null){
            query += ` WHERE q_id = ?`;
            params.push(q_id);
        }

        query += ` LIMIT 100;`;

        const data = await db.all(query, params);
        return data;
    } catch (error) {
        console.log(error)
        return error
    }
}
 
export async function insertQuestion(title, introduction, qYear, discipline){
    try {
        const db = await openDB();
        await db.run();
    } catch (error) {
        
    }
}
import { openDB } from "../configDB.js";

// CRUD Questions

export async function insertQuestion(title, introduction, qYear, discipline){
    try {
        const db = await openDB();
    } catch (error) {
        
    }
}
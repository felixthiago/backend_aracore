import { openDB } from '../configDB.js';

// CRUD Alternatives
const db = await openDB();

export async function insertAlternatives(question_id, alternatives){
    console.log(question_id, alternatives);
try {
    const sql = `INSERT INTO alternatives(alternative_letter, alternative_text, is_correct, question_id)
    VALUES(?, ?, ?, ?)`
    await db.run('BEGIN TRANSACTION')

    for (const alt of alternatives) {   
        if (
            !alt.letter || typeof alt.letter !== "string" || alt.letter.length !== 1 ||
            !alt.text ||typeof alt.text !== "string" ||
            typeof alt.is_correct !== "boolean"
        ) {
            console.log(alt.text, alt.letter, alt.is_correct)
            throw new Error("Erro de parâmetros passados ao inserir questão no banco de dados");
        }

    await db.run(sql, [alt.letter.toUpperCase(),
                        alt.text.trim(),
                        alt.is_correct ? 1 : 0,
                        question_id]
                        );
}await db.run('COMMIT');
} catch (error) {
    await db.run('ROLLBACK')
    console.log("error inserting alternative ", error)
    throw error
}}

export async function getAlternatives(question_id){
    try {
        const db = await openDB();
        const data = await db.all(`
        SELECT * FROM alternatives
        WHERE question_id = ?`, [question_id])
        return data
    } catch (error) {
        console.log('error fetching data > ', error)
    }
}

export async function updateAlternative(question_id){
    try {
        
    } catch (error) {
        
    }
}

export async function deleteAlternative(alternative_id){
    try {
        const db = await openDB();
        await db.run(`
        DELETE FROM alternatives
        WHERE alternative_id = ?`, [alternative_id])
    } catch (error) {
        console.log('error deleting alternative > ', error)
    }
}
import { openDB } from '../configDB.js';

// CRUD Alternatives
const db = await openDB();

export async function insertAlternatives(question_id, alternatives){
    console.log(question_id, alternatives);
try {
    const sql = `INSERT INTO alternatives(alternative_letter, alternative_text, is_correct, question_id)
    VALUES(?, ?, ?, ?)`
    // await db.run('BEGIN TRANSACTION')

    for (const alt of alternatives) {   
        if (
            !alt.letter || typeof alt.letter !== "string" || alt.letter.length !== 1 ||
            !alt.text ||typeof alt.text !== "string" ||
            typeof alt.is_correct !== "boolean"
        ) {
            // console.log(alt.text, alt.letter, alt.is_correct)
            throw new Error("Erro de parâmetros passados ao inserir questão no banco de dados");
        }

    await db.run(sql, [alt.letter.toUpperCase(),
                        alt.text.trim(),
                        alt.is_correct ? 1 : 0,
                        question_id]
                        );
}} catch (error) {
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

export async function updateAlternative(alternative_id, data) {
    try {
        const db = await openDB();

        if (!data || Object.keys(data).length === 0) {
            throw new Error("Nenhum dado válido enviado para atualização.");
        }

        const updated_data = Array.isArray(data.updates) ? data.updates[0] : data
        const fieldsAllowed = ["alternative_letter", "alternative_text", "is_correct"];
        const updates = {};

        for (const field of fieldsAllowed) {
            if (Object.prototype.hasOwnProperty.call(updated_data, field)) {
                updates[field] = updated_data[field];
            }
        }

        if (Object.keys(updates).length === 0) {
            throw new Error("Nenhum campo válido para atualização.");
        }

        const fieldsToUpdate = Object.keys(updates).map((key) => `${key} = ?`).join(", ");
        const values = Object.values(updates);

        await db.run(`UPDATE alternatives SET ${fieldsToUpdate} WHERE alternative_id = ?`, [...values, alternative_id]);

        console.log("Alternativa atualizada com sucesso!");
    } catch (error) {
        console.error("Erro ao atualizar alternativa no banco de dados:", error);
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
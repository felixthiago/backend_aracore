import { openDB } from "../configDB.js";
// CRUD SUBCATEGORIES

export async function insertSubcategory(subcategoryName, categoryID){
    try {
        const db = await openDB();
        await db.run(`
            INSERT INTO subcategories(subcategory_name, category_id)
            VALUES(?, ?)`, [subcategoryName, categoryID]);
    } catch (error) {
        console.log("error inserting subcategory > ", error)
    }
}

export async function getSubcategories(categoryID = null){
    try {
        const db = await openDB();
        let query = `
            SELECT s.subcategory_id, 
                   c.category_name, 
                   c.category_id, 
                   s.subcategory_name 
            FROM subcategories s
            JOIN categories c ON s.category_id = c.category_id
        `;

        const params = [];
        if (categoryID !== null) {
            query += ` WHERE c.category_id = ?`;
            params.push(categoryID);
        }

        query += ` LIMIT 100`;
        const result = await db.all(query, params);
        return result;
    } catch (error) {
        console.log("error fetching subcategories: ", error)
    }
}

export async function updateSubcategory(subcategoryID, newSubcategoryName){
    try {
        const db = await openDB();
        await db.run(`
            UPDATE subcategories
            SET subcategory_name = ?
            WHERE subcategory_id = ?`, [newSubcategoryName, subcategoryID]);
    } catch (error) {
        console.log("error updating subcategory > ", error)   
    }
}

export async function deleteSubcategory(subcategoryID){
    try {
        const db = await openDB();
        await db.run(`
            DELETE FROM subcategories
            WHERE subcategory_id = ?`, [subcategoryID])
    } catch (error) {
        console.log("error deleting subcategory > ", error)
    }
}
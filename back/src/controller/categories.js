import { openDB } from "../configDB.js"

// CRUD Categories

export async function insertCategory(categoryName){
    try {
        const db = await openDB();
        await db.run(`
                    INSERT INTO Categories(category_name)
                    VALUES(?)`, [categoryName]);
        console.log("Sucessfully inserted category:", categoryName);
    } catch (error) {
        console.log("Error inserting category: ", error)
    }
}

export async function getAllCategories(categoryID = null){
    try {
        const db = await openDB();
        let query = `SELECT * FROM categories
        `;
        const params = [];
        if(categoryID !== null){
            query += ` WHERE category_id = ?`;
            params.push(categoryID)
        }

        query += ` LIMIT 100`;
        const results = await db.all(query, params);
        return results;
    } catch (error) {
        console.log("Error fetching categories: ", error);
        throw error
    }
}

export async function updateCategory(categoryID, newCategoryName){
    try {
        const db = await openDB();
        return db.run(`UPDATE categories
        SET category_name = ?
        WHERE category_id = ?`, [newCategoryName, categoryID])
    } catch (error) {
        console.log("Error updating category: ", error)
    }
}

export async function deleteCategory(categoryID){
    try {
        const db = await openDB();
        return await db.run(`DELETE FROM categories WHERE category_id = ?`, [categoryID]);
    } catch (error) {
        console.log("error deleting category > ", error)
    }
}
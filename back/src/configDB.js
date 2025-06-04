import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDB(){
    try {
        return open({
        filename: "./questions.db",
        driver: sqlite3.Database
    })
    } catch (error) {
        console.log("Error opening database:", error);
    }
}

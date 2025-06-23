import { Router} from "express";
import { insertSubcategory, getSubcategories, updateSubcategory, deleteSubcategory} from "../../controller/subcategories.js";

const router = Router();

// CRUD Subcategories

router.post("/api/v1/admin/subcategories", async function(req, res){
    const { subcategory_name, category_id } = req.body;
    try {
        if(!subcategory_name || !category_id){
            res.status(400).json({
                "StatusCode": res.statusCode,
                "StatusMessage": "Missing required fields",
            })
            return;
        }   
        await insertSubcategory(subcategory_name, category_id)
        res.status(200).json({
            "StatusCode": res.statusCode,
            "StatusMessage": "Subcategory inserted sucessfully"
        })
    } catch (error) {
        res.status(500).json({
            "StatusCode": res.statusCode,
            "StatusMessage": error.message
        })
    }
})

router.get("/api/v1/admin/subcategories", async function(req, res){
    try {
        const categoryID = req.query.id;
        const subcategories = await getSubcategories(categoryID ? Number(categoryID) : null);
        res.status(200).json({
            "StatusCode": res.statusCode,
            "StatusMessage": `${subcategories.length} Subcategories retrieved succesfully `,
            "Data": subcategories
        })
    } catch (error) {
        res.status(500).json({
            "StatusCode": res.statusCode,
            "StatusMessage": error.message
        })
        
    }
})

router.put("/api/v1/admin/subcategories", async function(req, res){
    try {
        const { subcategory_name, subcategory_id } = req.body;
        await updateSubcategory(subcategory_id, subcategory_name);
        res.status(200).json({
            "StatusCode": res.statusCode,
            "StatusMessage": "Subcategory updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            "StatusCode": res.statusCode,
            "StatusMessage": error.message 
        })
    }
})

router.delete("/api/v1/admin/subcategories", async function(req, res){
    try {
        const { id } = req.query;
        await deleteSubcategory(id);
        res.status(200).json({
            "StatusCode": res.statusCode,
            "StatusMessage": "Subcategory deleted successfully"
        })
    } catch (error) {
        console.log("Error deleting subcategory: ", error)
    }
})

export default router
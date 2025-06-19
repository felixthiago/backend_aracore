import { Router } from "express";
import { insertCategory, updateCategory, deleteCategory, getAllCategories} from "../controller/categories.js";

const router = Router();

// router.get('/', function(req, res){
//     res.status(200).json({
//         "StatusCode": res.statusCode,
//         "StatusMessage": "Api working"
//     })
// })


router.post("/api/v1/admin/categories", function(req, res){
    const { categoryName } = req.body;
    if(!categoryName){
        res.status(400).json({
            "StatusCode": res.statusCode,
            "StatusMessage": "Missing required fields",
        })
    }else{
        try {
            insertCategory(categoryName)
            res.status(200).json({
                "StatusCode": res.statusCode,
                "StatusMessage": "Category inserted sucessfully"
            })
        } catch (error) {
            res.status(500).json({
                "StatusCode": res.statusCode,
                "StatusMessage": error.message
            })
        }
    }
})

router.get("/api/v1/admin/categories", async function(req, res){
    try {
        const id = req.query.id;
        const categories = await getAllCategories(id ? Number(id) : null);
        res.status(200).json({
            "StatusCode": res.statusCode,
            "StatusMessage": `Retrieved ${categories.length} categories`,
            "Data": categories
        })
    } catch (error) {
        res.status(500).json({
            "StatusCode": res.statusCode,
            "StatusMessage": error.message
        })
        
    }
})

router.put("/api/v1/admin/categories", function(req, res){
    const { category_id, category_name } = req.body
    try {
        updateCategory(category_id, category_name);
        res.status(200).json({
            "StatusCode": res.statusCode,
            "StatusMessage": `Category sucessfully updated`
        })
    } catch (error) {
        res.status(500).json({
            "StatusCode": res.statusCode,
            "StatusMessage": error.message
        })
    }
});

router.delete("/api/v1/admin/categories", function(req, res){
    const { id } = req.query;
    console.log(id)
    try {
        deleteCategory(id)
        res.status(200).json({
            "StatusCode": res.statusCode,
            "StatusMessage": `Category with ID ${id} deleted sucessfully`
        })
    }catch (error){
        res.status(500).json({
            "StatusCode": res.statusCode,
            "StatusMessage": error.message
        })
    }
})

export default router
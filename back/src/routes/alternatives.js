import { Router } from 'express';
import { deleteAlternative, getAlternatives, insertAlternatives } from '../controller/alternatives.js';

const router = Router();

router.post("/api/admin/alternatives", async function (req, res){
    const { question_id, alternatives } = req.body
    console.log(req.body)
    try {
        if (typeof question_id !== "number" || !Array.isArray(alternatives)){
            return res.status(400).json({
                'StatusCode': res.statusCode,
                'StatusMessage': 'invalid data types',
                "data": question_id, alternatives
            })
        }

        await insertAlternatives(question_id, alternatives);
        res.status(200).json({
            "StatusCode": res.statusCode,
            "statusMessage": `succesfully inserted alternatives`
        })

    } catch (error) {
        console.log('Erro inserindo alternativa> ', {error})
        if (error.message.includes("UNIQUE constraint failed")){
            res.status(409).json({
                "StatusCoded": res.statusCode,
                "StatusMessage": `This type'o field already exists in database!`
            })
        }
        throw error
    }})
 

router.get("/api/admin/alternatives", async function(req, res){
    try {
        const { id } = req.query;
        console.log(id)
        const data = await getAlternatives(id);
        console.log(data)
        // console.log(data, data.length)
        if(!id || !data.length){
            res.status(400).json({
                "StatusCoded": res.statusCode,
                "StatusMessage": "Invalid params or no data in the table!"
            })
        }
        res.status(200).json({
            "statusCode": res.statusCode,
            "statusMessage": `found exactly ${data.length} alternatives`,
            "Data": data
        })

    } catch (error) {
        console.log('eror fecthing alternatives')
        throw error
    }
})

// router.put("")

router.delete("/api/admin/alternatives", async function(req, res){
    try {
        const { id } = req.query
        await deleteAlternative(id);
        if(!id){
            res.status(400).json({
                "StatusCode": res.statusCode,
                "StatusMessage": "invalid params"
            })
        }
        res.status(200).json({
            "StatusCode": res.statusCode,
            "StatusMessage": `Succesfully deleted ${id}`
        })
    } catch (error) {
        
    }
})

export default router;
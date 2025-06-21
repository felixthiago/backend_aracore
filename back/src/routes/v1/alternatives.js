import { Router } from 'express';
import { updateAlternative, deleteAlternative, getAlternatives, insertAlternatives } from '../../controller/alternatives.js';

const router = Router();

router.post("/api/v1/admin/alternatives", async function (req, res){
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
        res.status(500).json({
            "StatusCode": res.statusCode,
            "StatusMessage": error.message
        })
        throw error
    }})
 

router.get("/api/v1/admin/alternatives", async function(req, res){
    try {
        const { id } = req.query;
        const data = await getAlternatives(id);
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
        res.status(500).json({
            "StatusCode": res.statusCode,
            "StatusMessage": error.message
        })
    }
})

router.patch("/api/v1/admin/alternatives", async function(req, res){
    try {
        const { id } = req.query
        if (!id || isNaN(id)) {
            return res.status(400).json({
                "StatusCode": res.statusCode,
                "StatusMessage": "ID inválido ou não fornecido."
            });
        }
        const updates = req.body;
        if (!updates || Object.keys(updates).length === 0) {
            return res.status(400).json({ error: "Nenhum campo enviado para atualização." });
        }
        await updateAlternative(id, updates);
        res.status(200).json({
            "StatusCode": res.statusCode,
            "StatusMessage": `${id, updates} updated successfully`
        })
    } catch (error) {
        res.status(500).json({
            "StatusCode": res.statusCode,
            "StatusMessage": error.message
        })
    }
});

router.delete("/api/v1/admin/alternatives", async function(req, res){
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
        res.status(500).json({
            "StatusCode": res.statusCode,
            "StatusMessage": error.message
        })
    }
})

export default router;
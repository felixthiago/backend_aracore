import { Router } from "express";
import { getQuestions } from "../../controller/questions.js";

const router = Router();

router.get("/api/v1/admin/questions", async function(req, res){
    const { id } = req.query;
    try {
        const data = await getQuestions(id ? Number(id): null);
        if (!data || data.length === 0){
            res.status(404).json({
                "StatusCode": res.statusCode,
                "StatusMessage": "Nenhuma questão encontrada com o ID recebido"
            })
        }
        res.status(200).json(({
            "StatusCode": res.statusCode,
            "StatusMessage": `${data.length} Questões encontradas no banco de dados`,
            "Data": data
        }))

    } catch (error) {
        res.status(500).json({
            "StatusCode": res.statusCode,
            "StatusMessage": error.message
        })
    }
})

export default router
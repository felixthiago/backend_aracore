// import { insertCategory, insertSubcategory, updateCategory, getAllRow} from "./controller/categories.js"
import express from "express";
const app = express();
app.use(express.json())
import bodyParser from 'body-parser'
import session from "express-session"
import cors from "cors";
app.use(cors())

import categories from "./routes/categories.js"
import subcategories from "./routes/subcategories.js"
import alternatives from "./routes/alternatives.js"

const routes = [categories, subcategories, alternatives]

routes.forEach(route => {
    app.use(route)
})

app.use(bodyParser.json())
app.use(
    session({
        secret: "secret_key",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000 * 60 * 24 // a day in milliseconds
        }
    })
)

// app.post("/api/login/", function(req, res){
//     const { user, password } = req.body
//     if (user == "admin" && password == "admin"){
//         req.session.user = user;
//     }
//     // session.visited = true when logged on
// })


// app.post("/question/", function (req, res){
//     const { title, introduction, qYear, discipline} = req.body;
//     if(!title || !introduction || !qYear || !discipline){
//         res.status(400).json({
//             "StatusCode": res.statusCode,
//             "StatusMessage": "Missing required fields"
//         })
        
//     }else{
//         try {
//             insertQuestion(title, introduction, qYear, discipline)
//             res.status(200).json({
//                 "StatusCode": res.statusCode,
//                 "StatusMessage": "Question inserted sucessfully"
//             })
//         } catch (error) {
//             res.status(500).json({
//             "StatusCode": res.statusCode,
//             "StatusMessage": error.message
//             })
//         }
//     }
// })  


const port = 3069
app.listen(port, () => {
    console.log(`API initialized on port ${port}`)
})
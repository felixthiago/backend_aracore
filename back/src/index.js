// import { insertCategory, insertSubcategory, updateCategory, getAllRow} from "./controller/categories.js"
import express from "express";
const app = express();
app.use(express.json())
import bodyParser from 'body-parser'
import session from "express-session"
import cors from "cors";
app.use(cors());

import categories from "./routes/v1/categories.js";
import subcategories from "./routes/v1/subcategories.js";
import alternatives from "./routes/v1/alternatives.js";
import questions from "./routes/v1/questions.js";

const routes = [categories, subcategories, alternatives, questions];

routes.forEach(route => {
    app.use(route)
})

app.get("/health", (req, res) => {
    res.status(200).json({
        "StatusCode": res.statusCode,
        "StatusMessage": "API is working as well"
    })
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

const port = 3069
app.listen(port, () => {
    console.log(`API initialized on port ${port}`)
})
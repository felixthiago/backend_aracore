import './App.css'
import { getQuestions } from "../../back/src/controller/questions.js"

function App() {
  return (
    <main>
    <span className = 'text-3xl font-inter font-extrabold bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-transparent bg-clip-text'>Tabela Questões </span>
    <h1 class = "sm:text-blue-500 md:text-blue-800 lg:text-blue-950 bold text-blue-500 flexbox justify-center items-center "> {getQuestions(1)}</h1>
    </main>
    )
}

export default App

import "./App.css";
import { useState, useEffect } from "react";

const QuestionsTable = ({ questions, categories, subcategories }) => {
  const selectQuestionID, setSelectQuestionID = useState(null);
  const getCategoryName = (id) => {
    const category = categories.find((c) => c.category_id === id)
    return category ? category.category_name : "Categoria desconhecida";
  }
  const getSubcategoryName = (id) => {
    const subcategory = subcategories.find((sc) => sc.subcategory_id === id)
    return subcategory ? subcategory.subcategory_name : 'Subcategoria desconhecida';
  }

  const handleShowAlternatives = (qID) =>{
    setSelectQuestionID(qID);
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-400 dark:text-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            {[
              "Questão Título",
              "Texto",
              "Categoria",
              "Subcategoria",
              "Alternativas",
              "Editar",
            ].map((header) => (
              <th key={header} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {questions && questions.length > 0 ? (
            questions.map((q) => (
              <tr
                key={q.q_id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-${q.q_id}`}
                      type="checkbox"
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-table-${q.q_id}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {q.q_title}
                </th>
                <td className="px-6 py-4">{q.q_text}</td>
                <td className="px-6 py-4">{getCategoryName(q.q_category_id)}</td>
                <td className="px-6 py-4">{getSubcategoryName(q.q_subcategory_id)}</td>
                <td className='px-6 py-4'><button href = '#' onClick={() => handleShowAlternatives()}>Ver alternativas</button></td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-6 py-4">
                Nenhum dado encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const AlternativeTable = ({ alternatives }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Alternativa</th>
            <th scope="col" className="px-6 py-3">Correta</th>
          </tr>
        </thead>
        <tbody>
          {alternatives && alternatives.length > 0 ? (
            alternatives.map((alt) => (
              <tr key={alt.alt_id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{alt.alt_id}</td>
                <td className="px-6 py-4">{alt.alt_text}</td>
                <td className="px-6 py-4">{alt.is_correct ? "Correta" : "Incorreta"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="px-6 py-4">
                Nenhuma alternativa encontrada.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

}



function App() {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [alternatives, setAlternatives] = useState([]);
  const endpoint = "http://localhost:3069";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // questions
        const responseQuestions = await fetch(
          `${endpoint}/api/v1/admin/questions`
        );
        const dataQuestions = await responseQuestions.json();
        setQuestions(dataQuestions.Data);

        // categories
        const responseCategories = await fetch(
          `${endpoint}/api/v1/admin/categories`
        );
        const dataCategories = await responseCategories.json();
        setCategories(dataCategories.Data);

        // subcategories
        const responseSubCategories = await fetch(
          `${endpoint}/api/v1/admin/subcategories`
        );
        const dataSubcategories = await responseSubCategories.json();
        setSubcategories(dataSubcategories.Data)

        // alternatives
        const responseAlternatives = await fetch(
          `${endpoint}/api/v1/admin/alternatives`
        ) 
      } catch (error) {
        console.error("Erro ao buscar questions:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="text-center p-4">
      <h1 className="font-bold text-3xl mb-4">ADMIN PANEL</h1>
      <QuestionsTable questions = { questions } categories = { categories } subcategories = { subcategories }/>

    </div>
  );
}

export default App;
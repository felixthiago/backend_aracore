import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// import './App.css'
// import { useEffect } from 'react';

// const QuestionsTable = () => {
//   return (
//     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//         <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
//           <div>
//             <button
//               id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
//               <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" /> </svg>
//               Last 30 days
//               <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
//             </button>

//             {/* Dropdown menu - você pode implementar lógica para mostrar/ocultar */}
//             <div id="dropdownRadio" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" >
//               <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
//                 {["Last day", "Last 7 days", "Last 30 days", "Last month", "Last year"].map((label, i) => (
//                   <li key={label}>
//                     <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
//                       <input id={`filter-radio-example-${i + 1}`} type="radio" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                       />
//                       <label htmlFor={`filter-radio-example-${i + 1}`} className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300" >
//                         {label}
//                       </label>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <label htmlFor="table-search" className="sr-only">
//             Search
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
//               <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/></svg>
//             </div>
//             <input
//               type="text"
//               id="table-search"
//               className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//               placeholder="Search for items"
//             />
//           </div>
//         </div>

//         <table className="w-full text-sm text-left text-gray-400 dark:text-white">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="p-4">
//                 <div className="flex items-center">
//                   <input
//                     id="checkbox-all-search"
//                     type="checkbox"
//                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                   />
//                   <label htmlFor="checkbox-all-search" className="sr-only">
//                     checkbox
//                   </label>
//                 </div>
//               </th>
//               {['Questão Titulo', 'Text', 'Category', 'Subcategory', 'Action'].map((header) => (
//                 <th key={header} scope="col" className="px-6 py-3">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               { name: 'Enem 2024', color: 'Um pintor pretende fazer uma reprodução do quadro Guernica em uma tela de dimensões 20 cm por 30 cm. Essa obra, de autoria do espanhol Pablo Picasso, é uma pintura com 3,6 m de altura e 7,8 m de comprimento', category: 'Química', price: 'Química Orgânica' },
//               { name: 'Enem 1923', color: 'Em um sistema hipotético mantido sob iluminação, estão presentes uma célula autotrófica e uma célula heterotrófica', category: 'Matemática', price: 'Sisteminhas' },
//             ].map((item, index) => (
//               <tr
//                 key={index}
//                 className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//               >
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input
//                       id={`checkbox-table-${index}`}
//                       type="checkbox"
//                       className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                     />
//                     <label htmlFor={`checkbox-table-${index}`} className="sr-only">
//                       checkbox
//                     </label>
//                   </div>
//                 </td>
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                   {item.name}
//                 </th>
//                 <td className="px-6 py-4">{item.color}</td>
//                 <td className="px-6 py-4">{item.category}</td>
//                 <td className="px-6 py-4">{item.price}</td>
//                 <td className="px-6 py-4">
//                   <a
//                     href="#"
//                     className="font-medium text-purple-600 dark:text-purple-500 hover:underline"
//                   >
//                     Edit
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//   )
// };

// function App(){
//   // const [categories, setCategories] = useState([]);

//   const endpoint = "http://localhost:3069";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${endpoint}/api/v1/admin/questions`);
//         response.json().then(data => {
//           const jsonData = data.Data;
//           console.log(jsonData);
//           // console.log(jsonData.q_category_id);
//         })
//       } catch (error) {
//         throw new Error(`Error fetching categories: ${error.message}`);
//       }
//     }
//     fetchData();
//   })

//   return (
//     <div className="text-center">
//       <h1 className="font-bold text-3x1">Tabelinha</h1>
//       {/* <div className="">{categories.map(p => {
//         return <SimpleCard key={p.id} user={p.category_name} />
//       })}</div> */}
//       {/* <QuestionsTable/> */}
//     </div>
//   )
// };

// export default App
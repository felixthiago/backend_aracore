import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
  <div className="">
    <section>
      <span className = 'text-3xl font-inter font-extrabold bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-transparent bg-clip-text'>Lorem Ipsum Dolor </span>
      <h1 class = "sm:text-blue-500 md:text-blue-800 lg:text-blue-950 bold text-blue-500 flexbox justify-center items-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quasi beatae adipisci commodi illo quisquam ipsa dolorum dicta accusamus, odit a, iure nisi quibusdam, quam at sunt vero temporibus assumenda.</h1>
    </section>
  </div>
    </>
  )
}

export default App

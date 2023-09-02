import "./App.css"

import { NextUIProvider } from "@nextui-org/react"

function App() {
  return (
    <NextUIProvider>
      <h1 className="text-3xl text-green-300 font-bold">Trying NextUI 🚀</h1>
      <h1 className="text-2xl text-red-300 font-bold">Power by:</h1>
      <ul>
        <li className="text-1xl text-blue-500 font-bold">React 18</li>
        <li className="text-1xl text-blue-300 font-bold">Tailwind CSS 3</li>
        <li className="text-1xl text-violet-400 font-bold">Framer Motion 4</li>
      </ul>
    </NextUIProvider>
  )
}

export default App

import React from "react"
import "./assests/css/style.css"

function App({ title }) {
  return (
    <div className="bg-gray-600 text-white p-5 border">
      <div> {title}</div>
    </div>
  )
}
export default App

import React, { useState } from "react"
import "./assests/css/style.css"
import Images from "./components/Images"
function App() {
  const [title, setTitle] = useState("This is the best one can learn from ")

  return (
    <section className=" flex justify-center">
      {console.log("re-renderd")}
      <div className="w-10/12">
        <div className="text-center">
          <div className="my-4">{title}</div>
          <Images />
        </div>
      </div>
    </section>
  )
}

export default App

import React, { useState } from "react"
import "./assests/css/style.css"
import Images from "./components/Images"
function App() {
  const [title, setTitle] = useState("hello Akash")
  const [isShowing, setIsShowing] = useState(false)

  function handleClick() {
    setIsShowing(!isShowing)
  }

  return (
    <section className=" flex justify-center">
      <div className="w-1/2">
        <div className="text-center">
          <div className="my-4">{title}</div>
          <div>
            <button
              className="p-1 bg-blue-700 text-white my-2"
              onClick={handleClick}>
              Toggle Image
            </button>
          </div>
          {isShowing ? <Images /> : null}
        </div>
      </div>
    </section>
  )
}

export default App

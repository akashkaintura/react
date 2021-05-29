import React, { useState, useEffect, useRef } from "react"
import "./assests/css/style.css"
import Images from "./components/Images"
function App() {
  const [title, setTitle] = useState("This is the best one can learn from ")
  const [isShowing, setIsShowing] = useState(null)
  const [didMount, setdidMount] = useState(false)

  const mountRef = useRef(false)

  // component did Mount
  useEffect(() => {
    setdidMount(true)
    console.log("App Mounted")
  }, [])

  // component will Update
  useEffect(() => {
    if (mountRef.current) {
      console.log("App Updated")
    } else {
      mountRef.current = true
    }
  }, [isShowing])

  function handleClick() {
    setIsShowing(!isShowing)
  }

  return (
    <section className=" flex justify-center">
      <div className="w-1/2">
        {console.log("re-renderd")}
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

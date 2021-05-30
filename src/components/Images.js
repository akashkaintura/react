import React, { useEffect, useState, useRef, Component } from "react"
import Image from "./image"
export default function Images() {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1622241944227-ae279379cc80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1622227432807-91af5901f941?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=616&q=80",
    "https://images.unsplash.com/photo-1622281549424-fd9aaea1fd43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1621570169561-0c2a2e193ee1?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1622228262959-8cead91ed5c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1622279240815-20a1d7449e40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=892&q=80",
  ])

  const inputRef = useRef(null)
  const varRef = useRef(images.length)

  useEffect(() => {
    inputRef.current.focus()
    console.log(varRef)
  }, [])

  // const [updateCount, setUpdateCount] = useState(0)

  useEffect(() => {
    varRef.current = varRef.current + 1
    // setUpdateCount(updateCount + 1)
    // console.log("count")
  })

  const [newImageUrl, setNewImageUrl] = useState("")

  function ShowImage() {
    return images.map((img, index) => (
      <Image
        image={img}
        handleRemove={handleRemove}
        index={index}
        key={index}
      />
    ))
  }

  function handleAdd() {
    if (newImageUrl !== "") {
      setImages([...images, newImageUrl])
      setNewImageUrl(" ")
    }
  }

  function handleRemove(index) {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ])
  }

  function handleChange(event) {
    setNewImageUrl(event.target.value)
  }

  return (
    <section>
      <p> component is Updated {varRef.current} times</p>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between my-5">
        <div className="w-full">
          <input
            type="text"
            id="inputBox"
            ref={inputRef}
            className="p-2 border-gray-800 shadow rounded w-full"
            value={newImageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <button
            disabled={newImageUrl === ""}
            className={`p-2  text-white ml-2 ${
              newImageUrl !== "" ? "bg-green-600" : "bg-green-300"
            }`}
            onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </section>
  )
}

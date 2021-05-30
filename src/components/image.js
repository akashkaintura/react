import React, { useState } from "react"

export default function Image({ index, image, handleRemove }) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="w-1/3 my-4 flex justify-center ">
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(index)}
        onMouseLeave={() => setIsHovering(false)}>
        <i
          className={`fas fa-times absolute right-0 cursor-pointer opactity-25 hover:opacity-100 ${
            isHovering ? "" : "hidden"
          }`}
          onClick={() => handleRemove(index)}></i>
        <img src={image} width="150px" alt="unsplash" />
      </div>
    </div>
  )
}

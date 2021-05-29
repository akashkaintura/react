import React, { useEffect } from "react"

export default function Images() {
  const Images = [
    "https://images.unsplash.com/photo-1622241944227-ae279379cc80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1622227432807-91af5901f941?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=616&q=80",
    "https://images.unsplash.com/photo-1622281549424-fd9aaea1fd43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1621570169561-0c2a2e193ee1?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1622228262959-8cead91ed5c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1622279240815-20a1d7449e40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=892&q=80",
  ]

  console.log(
    Images.map((image) => {
      return (
        <div>
          <img src={image} width="150px" alt="unsplash" />
        </div>
      )
    })
  )

  return (
    <section>
      <div class="flex justify-center">
        {Images.map((image) => {
          return (
            <div>
              <img src={image} width="150px" alt="unsplash" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

import React from "react"
import "./assests/css/style.css"

// function App({ title }) {
//   return (
//     <div className="bg-gray-600 text-white p-5 border">
//       <div> {title}</div>
//       <div>
//         <article>This is my career </article>
//       </div>
//     </div>
//   )
// }

// class Based
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: "Hello Akash", isShowing: false }
    this.handleClick = this.handleClick.bind(this) //this is because if we want to use the normal funtion
  }

  // handleClick using Arrow
  // It will work
  handleClick = () => {
    this.setState({ isShowing: !this.state.isShowing })
  }

  // using the normal function which will not work as the scope it is out  of scope
  // handleClick() {
  //   this.setState({ isShowing: !this.state.isShowing })
  // }

  render() {
    return (
      <section className=" flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
            <div className="my-4">{this.state.title}</div>
            <div>
              <button
                className="p-1 bg-blue-700 text-white my-2"
                onClick={this.handleClick}>
                Toggle Image
              </button>
            </div>
            {this.state.isShowing ? (
              <img
                className="my-2"
                src="https://images.unsplash.com/photo-1621084556062-c2d810daff25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="cycle"
              />
            ) : null}
          </div>
        </div>
      </section>
    )
  }
}

export default App

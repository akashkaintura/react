import React from "react"
import "./assests/css/style.css"
import Images from "./components/Images"
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
    console.log("App Constructor")
    super(props)
    this.state = { title: "Hello Akash", isShowing: false }
    this.handleClick = this.handleClick.bind(this) //this is because if we want to use the normal funtion
  }

  // component Mount

  componentDidMount() {
    console.log("Mount")
    this.setState({
      title: "hello this is componenet mounted",
    })
  }

  // component UnMount

  componentWillUnmount() {
    console.log("UnMount")
  }

  handleClick = () => {
    this.setState({ isShowing: !this.state.isShowing })
  }

  render() {
    console.log("App Renderer")
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
            {this.state.isShowing ? <Images /> : null}
          </div>
        </div>
      </section>
    )
  }
}

export default App

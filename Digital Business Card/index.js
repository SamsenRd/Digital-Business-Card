import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"

function App(){
    return(
        <div className="container">
            <section className="container-main">
                <Info />
                <About />
                <Interests />
            </section>
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
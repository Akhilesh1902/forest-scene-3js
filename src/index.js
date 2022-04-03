import React from "react"
// import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import * as RDC from "react-dom/client"

const rootContainer = document.getElementById("root")

const root = RDC.createRoot(rootContainer)

root.render(<App />)

// ReactDOM.render(<App />, document.getElementById("root"))

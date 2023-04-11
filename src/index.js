import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.less";
import "@/styles/index.less";
import "./mock";
import '@/lib/monitor';

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)

// ReactDOM.render(<App />, document.getElementById("root"));


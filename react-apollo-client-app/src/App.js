import * as React from "react";
import "./App.css";
import BookListClassComponent from "./components/class/Books/BookList";
import BookdetailsClassComponent from "./components/class/Books/BookDetails";

import BookListFunctionalComponent from "./components/function/Books/BookList";
import BookdetailsFunctionalComponent from "./components/function/Books/BookDetails";

import DummyClassComponentLifeCycle from './components/class/Dummy/component-lifecycle';
import DummyFunctionalComponentLifeCycle from "./components/function/Dummy/component-lifecycle";

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <hr />
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            width: "49%",
            float: "left",
            marginLeft: "5px",
            /*border: "2px solid yellow",*/
          }}
        >
          <div>
            <DummyClassComponentLifeCycle />
          </div>
          <div style={{ /*border: "1px solid red"*/ }}>
            <BookListClassComponent />
          </div>
          <div style={{ /*border: "1px solid red",*/ marginTop: "50px" }}>
            <BookdetailsClassComponent />
          </div>
        </div>
        <div
          style={{
            borderLeft: "2px solid green",
            height: "100%",
            position: "absolute",
            left: "50%",
            top: "10%",
          }}
        ></div>
        <div
          style={{
            width: "49%",
            float: "right",
            marginLeft: "5px",
            /*border: "2px solid yellow",*/
          }}
        >
          <div>
            <DummyFunctionalComponentLifeCycle />
          </div>
          <div style={{ /*border: "1px solid red"*/ }}>
            <BookListFunctionalComponent />
          </div>
          <div style={{ /*border: "1px solid red",*/ marginTop: "50px" }}>
            <BookdetailsFunctionalComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

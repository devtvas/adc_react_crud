import React, { useEffect, useState } from "react";

import axios from "axios";

import "./App.css";

function App() {
 const [posts, setPosts] = useState([]);
  useEffect(() => {
    //buscando url e add uma promise(then)
    axios
      .get("http://localhost:5000")
      .then(() => {
        // console.log("deu TUDO certo");
        setPosts("deu TUDO certo");
      })
      .catch(() => {
        console.log("deu ERRADO");
      });
  }, []);

  return (
    <div className="app">
      <div className="cards">
        {posts.map((post, key) => {
          return (
            <div className="card" key={key}>
              <div className="card-body">
                <h1>{post.title}</h1>
                <div className="line"></div>
                <h2>{post.content}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import axios from "axios";

const URL = "https://jntuhresults.up.railway.app/api/single?htno=";

function App() {
  const [htNo, setHtNo] = useState("s");
  const [post, setPost] = useState([]);

  const getData = (e) => {
    e.preventDefault();
    axios.get(URL + htNo).then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
  };

  return (
    <div className='App'>
      <form onSubmit={(e) => getData(e)}>
        <h1>Results</h1>
        <input type='text' onChange={(e) => setHtNo(e.target.value)} />
        <button>Submit</button>
        <br />
        <h4>{JSON.stringify(post.Details)}</h4>
        <br />
        <br />
        <p>{JSON.stringify(post.Results)}</p>
      </form>
    </div>
  );
}

export default App;

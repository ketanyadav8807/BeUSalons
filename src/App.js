import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [posts, setposts] = useState([]);
  function handelClick(){
    fetch(`https://jsonplaceholder.typicode.com/posts?query={inputValue}`)
    .then((res) => res.json())
    .then((result) => setposts(result))
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
    
      <input type="text"  onChange={(event)=>{setInputValue(event.currentTarget.value)}}/>
      <button onClick={()=> {handelClick()}}>Click Me</button>

      {posts ? posts.map((el)=>{
        return <Card title={el.title} key={el.id}/>
      }) : ""}
 
    </div>
  );
}

export default App;

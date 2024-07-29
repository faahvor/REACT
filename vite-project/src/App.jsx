/* eslint-disable react/no-unescaped-entities */
import "./App.css";
// import Child from "./components/Child";
import Parent from "./components/Parent";

function App() {
  const name = "deji"
  const array = [1,2,3,4,5]
  return (
    <div>
      <h1>Hello deji</h1>
      <p>deji's laptop</p>
      <Parent data={name} age={"23"} array={array}/>
      {name}
    </div>
  );
}

export default App;


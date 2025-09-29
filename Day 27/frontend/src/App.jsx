import axios from './axios/axiosconfig'
function App() {

  const getUserData = async () =>  {
    const response = await axios.get("/users")
    console.log(response);
  }
  return <div>
    <h2>Click on button to get data from backend</h2>
    <button onClick={getUserData}>Click me</button>
  </div>;
}

export default App;

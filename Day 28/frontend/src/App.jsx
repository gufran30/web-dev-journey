import Navbar from "./navbar/Navbar";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <div className="px-[10%] bg-gray-800 h-screen w-screen text-white">
      <Navbar />
      <MainRoute />
    </div>
  );
}

export default App;

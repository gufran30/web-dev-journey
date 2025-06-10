import Navbar from "./navbar/Navbar";
import './index.css'
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="bg-zinc-900 w-full h-screen text-white">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;

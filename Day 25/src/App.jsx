import { ToastContainer } from "react-toastify";
import Navbar from "./navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import RecipeContext from "./context/RecipeContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-900 w-full h-screen text-white">
      <RecipeContext>
        <BrowserRouter>
          <Navbar />
          <MainRoutes />
          <ToastContainer />
        </BrowserRouter>
      </RecipeContext>
    </div>
  );
}

export default App;

import { useDispatch } from "react-redux";
import Navbar from "./navbar/Navbar";
import MainRoute from "./routes/MainROute";
import { useEffect } from "react";
import { asyncCurrentUser } from "./store/actions/userAction";
import { asyncLoadProducts } from "./store/actions/productAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, []);

  return (
    <div className="bg-zinc-800 w-screen min-h-screen text-white">
      <Navbar />
      <MainRoute />
    </div>
  );
}

export default App;

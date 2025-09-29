import { useEffect, useState } from "react";
import getData from "./axios/axiosconfig";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="w-full h-screen">
      <div className="buttons absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          className="block  bg-zinc-700 px-5 py-2 text-lg hover:opacity-90 active:scale-98 outline-0 border-0 rounded mb-5"
          onClick={getData}
        >
          Click to get api data
        </button>

        <button
          className="block bg-zinc-700 px-5 py-2 text-lg hover:opacity-90 active:scale-98 outline-0 border-0 rounded mb-5"
          onClick={() => setCount((c) => c + 1)}
        >
          {`clicked ${count} times`}
        </button>
      </div>
    </div>
  );
}

export default App;

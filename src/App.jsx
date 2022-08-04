import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Home />

      <ToastContainer />
    </div>
  );
}

export default App;

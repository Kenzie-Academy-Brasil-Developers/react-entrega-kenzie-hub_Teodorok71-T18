import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./Routes"
import 'react-toastify/dist/ReactToastify.css';
import "./Styles/index.scss"

function App() {
  return (
    <>
      <RoutesMain/>
      <ToastContainer position="bottom-right" autoClose={2000}/>
    </>
  )
}

export default App

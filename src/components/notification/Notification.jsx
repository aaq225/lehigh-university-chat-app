import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  return (
    <div className='notification'>
        <ToastContainer position="bottom-center"/>
    </div>
  )
}

export default Notification
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";


const types = ["success", "info", "warning", "error"];

export const addNotification = () => {
    // use a random type of notification
    toast("Lorem ipsum dolor sit amet, consectetur adipiscing elit", {
        type: types[Math.floor(Math.random() * types.length)] as TypeOptions
    });
};

// export const ToastifyUtilitiesConfigurator = () => {

//     const addNotification = () => {
//         // use a random type of notification
//         toast("Lorem ipsum dolor sit amet, consectetur adipiscing elit", {
//             type: types[Math.floor(Math.random() * types.length)] as TypeOptions
//         });
//     };

// }

export const ToastifyUtilities = () => {

}
import Navbar from "../Components/Navbar/navbar.jsx";
import { createContext } from 'react';
import ContextProvider from "../context/ContextProvider.jsx";

export const AppContext = createContext();


const withLayout = (WrappedComponent) => {
    
    return (props) => {
         return (
            <ContextProvider>
                <Navbar/>
                <WrappedComponent {...props}/>
            </ContextProvider>
         );
    }
}

export default withLayout;
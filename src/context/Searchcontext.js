import { createContext,useState } from "react";



const Searchcontext = createContext();

const SearchProvider = ({children}) => {
    const [text, settext] = useState("");
    const [details , setdetails] = useState({})
 return (
     <Searchcontext.Provider value ={{settext , text, details , setdetails}}>{children}</Searchcontext.Provider>
 )
} 
export {SearchProvider, Searchcontext};
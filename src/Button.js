import React,{useContext} from "react"
import Context from "./Context";

const Button=()=>
{
    const{theme,toggleTheme}=useContext(Context);
    return(
        <button
            style={{backgroundColor:theme==="light"?"#ffff" : "#333333",
                color:theme==="light"?"#333333" : "#ffff",
            }}
            onClick={toggleTheme}>Toggle theme</button>
    );
};

export default Button;
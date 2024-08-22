import React, { useContext } from 'react';
import Button from './Button';
import Context from './Context';

const Home =()=>{
  const{theme,toggleTheme}=useContext(Context);

    return(
        <div 
          style={{
              background: theme==='dark'?'black':'white',
              height:"100vh",
              width:"100vw"
          }}
        >
          <h1>Themed App</h1>
          <Button/>
        </div>
    )
}

export default Home;
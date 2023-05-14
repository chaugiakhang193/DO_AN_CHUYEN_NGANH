import React, {useEffect  ,useState} from 'react';

import {Login} from "../containers/Auth/Login";
import {Forgot} from "../containers/Forgot/Forgot";

const App = () =>
{
  const [data, setData]=useState([{}]);
  
  useEffect(() =>{
    fetch("/login").then(
      response => response.json()
    ).then(
     data => {
      setData(data);
     }   
    )
  }, [])

  return 
  <div>
   
  </div>
}

export default App
import React, { useEffect, useState } from 'react';

const jsonData = () =>{
  const [data, setData] = useState([]);

  useEffect(()=>{
    const lerData = async() =>{
      const dataHTTP = await fetch("https://jefersonnsoares.github.io/Data/questionData.json");
      const dataJson = await dataHTTP.json();
      console.log('....');
      setData(dataJson); 
    }
    lerData();
  }, [])
  return data
}



export default jsonData;
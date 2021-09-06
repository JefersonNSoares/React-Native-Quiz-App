import React, { useEffect, useState } from 'react';

const jsonData = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://jefersonnsoares.github.io/Data/questionData.json');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);
  return data
}
// const jsonData = () =>{
//   const [data, setData] = useState([]);

//   useEffect(()=>{
//     const lerData = async() =>{
//       const dataHTTP = await fetch("https://jefersonnsoares.github.io/Data/questionData.json");
//       const dataJson = await dataHTTP.json();
//       console.log('....');
//       setData(dataJson); 
//     }
//     lerData();
//   }, [])
//   return data
// }



export default jsonData;
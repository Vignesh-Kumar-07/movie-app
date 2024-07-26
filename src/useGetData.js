/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from "react";

import axios from "axios";



export function useGetData() {
  const [movies, setMovies] = useState([]);
  const [num, setNum] = useState(1);
  const [isLoading,setIsloading] = useState(false)
  useEffect(() => {

    fetchData()
  },[])
  

const fetchData = useCallback(async () => {
  
  try {
    const response = await axios.get(
      `https://test.create.diagnal.com/data/page${num}.json`
    );
   
    setNum(num + 1)
    setMovies((prevData) => [
      ...prevData,
      ...response.data.page["content-items"].content,
    ]);
 
    setIsloading(true)
  } catch (error) {
    setIsloading(false)
  }
}, [num])
  

  return { movies,isLoading,fetchData};
}

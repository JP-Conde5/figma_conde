import { Slide1, Slide2, Slide3 } from "./src/screens"
import { Coiny_400Regular, useFonts } from '@expo-google-fonts/coiny';
import { Dispatch, SetStateAction, useState } from "react";

export interface IPage{
  setPage: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1) 
  let[fontsLoaded] = useFonts({
    Coiny_400Regular
  })
  if (!fontsLoaded){
    return null
  }
  return (
    <Slide1 setPage={setPage}/>
  );
}



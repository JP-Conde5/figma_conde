import { Slide1, Slide2, Slide3 } from "./src/screens"
import { Navigation } from "./src/navigation/index"
import { Coiny_400Regular, useFonts } from '@expo-google-fonts/coiny';
import { Dispatch, SetStateAction, useState } from "react";
export interface IPage{
  page: number,
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
  if(page == 1){
    return (
      <Slide1 page={page} setPage={setPage}/>
    );
  }else if(page == 2){
    return (
      <Slide2 page={page} setPage={setPage}/>
    )
  }else if(page == 3){
    return (
      <Slide3 page={page} setPage={setPage}/>
    )
  }else if(page==4){
    return(
      <Navigation/>
    )
  }else{
    return (
      <Slide1 page={page} setPage={setPage}/>
    )
  }
}



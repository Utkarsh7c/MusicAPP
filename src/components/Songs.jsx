
import { Song } from "./Song"
export const Songs = ({fn,allsongs}) => {
    console.log(allsongs)
    // use map function 
    // 
  return (<>  
      { allsongs.map((currentSong,index)=><Song fn={fn} key={index} song={currentSong}/>)}
      </>
  )
}


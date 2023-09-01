import { getSongs } from "../services/api-client"
import { Search } from "../components/Search"
import { Songs } from "../components/Songs"
import { useEffect, useState } from "react"
import { Player } from "../components/Player"
export const SearchPage = () => {
      const [allSongs,setSongs]=useState([]);
     const [flag,setFlag]=useState(false);
     const [song,setPlayerSong]=useState(null);
     const loadfunc= async()=>{
         setSongs(await getSongs('Latest Songs'));
      }
      useEffect(()=>{
        loadfunc();
      },[])
      const togglePlayer=(flag,songarg)=>{
        setPlayerSong(songarg) 
         setFlag(flag)
      }
     const getArtistName= async(artistName)=>{
        console.log(  " recevied artist name ",artistName);
           setSongs(await getSongs(artistName));
     }
     const jsx= <>
    <Search  fn={getArtistName} />
 <Songs fn={togglePlayer} allsongs={allSongs}/>
     </>
  return (
    <div className="container">
        <h1 className="alert alert-info text-center" > Utkarsh Music </h1>
 
 {flag?<Player  fn={togglePlayer}song={song}/>:jsx}

    </div>
  )
}

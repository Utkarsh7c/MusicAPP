import { Song } from "./Song"

// ? code works porperly : conditional rendering 
export const Player = ({ fn,song}) => {
  return ( <div>
         <button  onClick={()=>{
            fn(false,null);
         }}    className="btn btn-primary">Back to Home Page </button>
         <br />
         <p>
         <img   className="img-fluid   rounded mx-auto d-block"   src={song.artworkUrl100}  />
         <br />

         {song?.artistName} , {song ?.trackName}
         </p> 
      <audio controls>
    <source  src={song?.previewUrl}  type="audio/mp4" />
   </audio>
   <br />kk
    <button  className="btn btn-success  btn-lg"> LET'S PLAY  SOME MUSIC   </button>
   </div>
 
  )
}

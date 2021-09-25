//MEdia resize

// in case of null path, chivo
import logodev from './img/logodev.png'

export const smallImage = (imagePath, size) => {

  
  if(imagePath == null){
      return logodev
  }
   if(imagePath.match(/media\/screenshots/)){
     return imagePath.replace(
       "media/screenshots",
       `media/resize/${size}/-/screenshots`
     )
   } else {
     return imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`)
   }
};

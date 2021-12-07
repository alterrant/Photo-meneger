import LogOut from "../Auth/Sign out/SignOut";
import UserTitile from "../UserTitile/UserTitile";
import {PhotoLoader} from "../PhotoLoader/PhotoLoader";
import Photos from "../Photos/Photos";
import {SelectedPhoto} from "../SelectedPhoto/SelectedPhoto";
import {useState} from "react";

const UserProfile = () => {

  let [selectedPhoto, setSelectedPhoto] = useState(null);

 return (
     <div className='main-wrapper'>
       <LogOut/>
       {/*<LinkMultipleProfile/>*/}
       <UserTitile/>
       <PhotoLoader fill={"#8A2BE2"} stroke={"#8A2BE2"}/>
       <Photos setSelectedPhoto={setSelectedPhoto}/>
       {selectedPhoto && <SelectedPhoto selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>}
     </div>
 )
}

export default UserProfile;
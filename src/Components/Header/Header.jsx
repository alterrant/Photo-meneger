import GitHubSVG from "../assets/SVG/GitHub";
import LogOut from "../Auth/Sign out/SignOut";
import SwitchPhotos from "./SwitchPhotos";
import {useState} from "react";

const Header = () => {

  return (
      <header>
        <GitHubSVG/>
        <LogOut/>
      </header>
  )
}

export default Header;
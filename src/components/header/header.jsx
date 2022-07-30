import GitHubSVG from "../assets/svg/github";
import LogOut from "../auth/sign-out/sign-out";

const Header = () => {

  return (
      <header>
        <GitHubSVG/>
        <LogOut/>
      </header>
  )
}

export default Header;
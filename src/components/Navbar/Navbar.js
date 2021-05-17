// styles
import {
  Body, Image, Menu, MenuItem,
} from "./styles";
// Logo
import Logo from "../../images/logo.png";

function Navbar() {
  return (
    <Body>
      <Image src={Logo} />
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Stats</MenuItem>
        <MenuItem>Twitter</MenuItem>
        <MenuItem>Telegram</MenuItem>
      </Menu>
    </Body>
  );
}
export default Navbar;

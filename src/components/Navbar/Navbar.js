// styles
import { Menu } from "semantic-ui-react";
import {
  NavMenu, NavMenuItem, Image, DropDown, DropDownItem, DropDownMenu,
} from "./styles";
// Logo
import Logo from "../../images/logo.png";

function Navbar() {
  const home = "https://projectsakura.github.io/";
  const stats = "https://projectsakura.github.io/stats.html";
  const twitter = "https://twitter.com/ProjectSakura_";
  const telegram = "https://t.me/ProjectSakura";
  return (
    <NavMenu secondary>
      <Menu.Menu>
        <Image src={Logo} />
      </Menu.Menu>
      <Menu.Menu position="right">
        <NavMenuItem href={home} name="Home" />
        <NavMenuItem href={stats} name="Stats" />
        <NavMenuItem href={twitter} name="Twitter" />
        <NavMenuItem href={telegram} name="Telegram" />
        <DropDown item icon="bars" simple>
          <DropDownMenu>
            <DropDownItem href={home}>Home</DropDownItem>
            <DropDownItem href={stats}>Stats</DropDownItem>
            <DropDownItem href={twitter}>Twitter</DropDownItem>
            <DropDownItem href={telegram}>Telegram</DropDownItem>
          </DropDownMenu>
        </DropDown>
      </Menu.Menu>
    </NavMenu>
  );
}
export default Navbar;

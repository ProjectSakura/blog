/* eslint-disable */
//?Secondary Cards
import { TwitterTimelineEmbed } from "react-twitter-embed";
import SecondaryCard from "../../SecondaryCard/SecondaryCard";
//?Twitter
import Footer from "../../Footer/Footer";
//?Sidebar
import Sidebar from "../../Sidebar/Sidebar";
//?Styles
import {
  Container, Left, Mid, OtherBlogComponent, RecentBlogComponent, Right, TwitterComponent, SidebarComponent, Table, TableRow, TableData, TableBody, FooterDiv, NavBarDiv,
} from "./Style";
import Navbar from "../../Navbar/Navbar";

function Home() {
  const data = {
    title: "Blur, Transparency, Stability and much more in the May 2021 release of Project Sakura.",
    author: "LordShenron",
    date: "2018-08-03",
    desc: "Whats new in the latest release of Project Sakura? Check out.. ",
  };
  return (
    <Container>
      <NavBarDiv>
        <Navbar />
      </NavBarDiv>
      <Left>
        <SidebarComponent>
          <Sidebar />
        </SidebarComponent>
      </Left>
      <Mid>
        <h1>Blogs</h1>
        <RecentBlogComponent>
          <h2>Recent Blog</h2>
        </RecentBlogComponent>
        <OtherBlogComponent>
          <h2>Secondary Section</h2>
          <TableBody>
            <Table>
              <TableRow>
                <TableData>
                  <SecondaryCard data={data} />
                </TableData>
                <TableData>
                  <SecondaryCard data={data} />
                </TableData>
              </TableRow>
            </Table>
          </TableBody>
        </OtherBlogComponent>
      </Mid>
      <Right>
        <TwitterComponent>
          {/* <TwitterComponentEmbed /> */}
          <TwitterTimelineEmbed sourceType="profile" screenName="ProjectSakura_" theme="dark" options={{ height: 600 }} />
        </TwitterComponent>
      </Right>
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </Container>
  );
}
export default Home;

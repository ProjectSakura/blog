//?Twitter
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Footer from "../../Footer/Footer";
//?Sidebar
import Sidebar from "../../Sidebar/Sidebar";
//?Styles
import {
  Container, Left, Mid, OtherBlogComponent, RecentBlogComponent, Right, TwitterComponent, SidebarComponent, FooterDiv,
} from "./Style";

function Home() {
  return (
    <Container>
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
          <h2>Other Blogs with pagination</h2>
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

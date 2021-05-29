import { TwitterTimelineEmbed } from "react-twitter-embed";
//?Styles
import {
  Container, Left, Mid, OtherBlogComponent, RecentBlogComponent, Right, TwitterComponent,
} from "./Style";

function Home() {
  return (
    <Container>
      <Left>
        <h1>Menu</h1>
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
          <TwitterTimelineEmbed sourceType="profile" screenName="ProjectSakura_" theme="dark" options={{}} />
        </TwitterComponent>
      </Right>
    </Container>
  );
}
export default Home;

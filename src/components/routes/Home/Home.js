/* eslint-disable */
import { useState, useEffect } from "react";
import Pagination from "../../Pagination/Pagination";
//?Secondary Cards
import { TwitterTimelineEmbed } from "react-twitter-embed";
//?Twitter
// import Footer from "../../Footer/Footer";
//?Sidebar
import Sidebar from "../../Sidebar/Sidebar";
//?Styles
import {
  Container, Left, Mid, OtherBlogComponent, RecentBlogComponent, Right, TwitterComponent, SidebarComponent, FooterDiv, NavBarDiv,
} from "./Style";
import Posts from "../../Posts/Posts";
//navbar
import Navbar from "../../Navbar/Navbar";
//card data
import cardData from "../../data/cardData";
import RecentBlog from "../../PrimaryCard/RecentCard";

function Home() {
  //?--------Pagination--------
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    setLoading(true);
    setPosts(cardData);
    setLoading(false);
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //?---------------------- 
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
        <RecentBlogComponent>
          <RecentBlog />
        </RecentBlogComponent>
        <OtherBlogComponent>
          <Posts cardData={currentPosts} loading={loading} />
        </OtherBlogComponent>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </Mid>
      <Right>
        <TwitterComponent>
          <TwitterTimelineEmbed sourceType="profile" screenName="ProjectSakura_" theme="dark" options={{ height: 600 }} />
        </TwitterComponent>
      </Right>
      {/* <FooterDiv>
        <Footer />
      </FooterDiv> */}
    </Container>
  );
}
export default Home;

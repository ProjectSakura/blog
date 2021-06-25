/* eslint-disable */
import { useState, useEffect } from "react";
//?Twitter
import Pagination from "../../Pagination/Pagination";
import { TwitterTimelineEmbed } from "react-twitter-embed";
// import Footer from "../../Footer/Footer";
//?Sidebar
import Sidebar from "../../Sidebar/Sidebar";
//?Styles
import {
  Container, Left, Mid, OtherBlogComponent, RecentBlogComponent, Right, TwitterComponent, SidebarComponent, FooterDiv, NavBarDiv, AdvBanner, MerchBanner, PCImg, MobImg, Anchor
} from "./Style";
import Posts from "../../Posts/Posts";
//navbar
import Navbar from "../../Navbar/Navbar";
//footer
import Footer from "../../Footer/Footer";
//card data
import cardData from "../../data/cardData";
import RecentBlog from "../../PrimaryCard/RecentCard";
//merch
import MerchPCBanner from "../../../images/merch/desktop.GIF";
//adv
import AdComponent from "../../AdComponent/AdComponent";

function Home() {
  //?--------Pagination--------
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setLoading(true);
    setPosts(cardData);
    setLoading(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  //twitter
  const displayTwitter = () => {
    // console.log("width: ",width);
    if (width >= 900) {
      return (<TwitterTimelineEmbed sourceType="profile" screenName="ProjectSakura_" theme="dark" options={{ height: 450 }} />);
    }
    return;

  }
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
        <AdvBanner>
          <AdComponent />
        </AdvBanner>
        <MerchBanner>
          <Anchor href="https://www.hellotux.com/projectsakura" target="blank"><PCImg src={MerchPCBanner} alt="pc-banner" /></Anchor>
        </MerchBanner>
        <OtherBlogComponent>
          <Posts cardData={currentPosts} loading={loading} />
        </OtherBlogComponent>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </Mid>
      <Right>
        <TwitterComponent>
          {displayTwitter()}
        </TwitterComponent>
      </Right>
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </Container>
  );
}
export default Home;

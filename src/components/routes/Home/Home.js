/* eslint-disable */
import { useState, useEffect, lazy, Suspense } from "react";
//?Twitter
// import TwitterComponent from "../../TwitterComponent/TwitterComponent";
import Pagination from "../../Pagination/Pagination";
// import { TwitterTimelineEmbed } from "react-twitter-embed";
// import Footer from "../../Footer/Footer";
//?Sidebar
import Sidebar from "../../Sidebar/Sidebar";
//?Styles
import {
  Container, Left, Mid, OtherBlogComponent, RecentBlogComponent, Right, TwitterComponentContainer, SidebarComponent, FooterDiv, NavBarDiv, AdvBanner, MerchBanner, PCImg, Anchor, LoaderDiv,
} from "./Style";
//navbar
import Navbar from "../../Navbar/Navbar";
//footer
import Footer from "../../Footer/Footer";
//card data
import cardData from "../../data/cardData";
//merch
import MerchPCBanner from "../../../images/merch/merch.webm";
//adv
// import AdComponent from "../../AdComponent/AdComponent";
//lazy components
const RecentBlog = lazy(() => import("../../PrimaryCard/RecentCard"));
const Posts = lazy(() => import("../../Posts/Posts"));
const TwitterComponent = lazy(() => import("../../TwitterComponent/TwitterComponent"));
const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));

const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

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
          <Suspense fallback={renderLoader()}>
            <RecentBlog />
          </Suspense>
        </RecentBlogComponent>
        <Suspense fallback={renderLoader()}>
          <AdvBanner>
            <AdComponent />
          </AdvBanner>
        </Suspense>
        <MerchBanner>
          <Anchor href="https://www.hellotux.com/projectsakura" target="blank">
            <PCImg autoPlay loop muted playsinline src={MerchPCBanner} alt="pc-banner" />
          </Anchor>
        </MerchBanner>
        <Suspense fallback={renderLoader()}>
          <OtherBlogComponent>
            <Posts cardData={currentPosts} loading={loading} />
          </OtherBlogComponent>
        </Suspense>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </Mid>
      <Right>
        <TwitterComponentContainer>
          <Suspense fallback={renderLoader()}>
            <TwitterComponent />
          </Suspense>
        </TwitterComponentContainer>
      </Right>
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </Container>
  );
}
export default Home;

/* eslint-disable */
import { useState, useEffect } from "react";
import Pagination from "../../Pagination/Pagination";
//?Secondary Cards
import { TwitterTimelineEmbed } from "react-twitter-embed";
import SecondaryCard from "../../SecondaryCard/SecondaryCard";
//?Twitter
import Footer from "../../Footer/Footer";
//?Sidebar
import Sidebar from "../../Sidebar/Sidebar";
//?Styles
import {
  Container, Left, Mid, OtherBlogComponent, RecentBlogComponent, Right, TwitterComponent, SidebarComponent, Table, TableRow, FooterDiv, NavBarDiv,
} from "./Style";
import Posts from "../../Posts/Posts";
import Navbar from "../../Navbar/Navbar";
//card data
import cardData from "../../data/cardData";
import { TableBody } from "semantic-ui-react";

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
  // const data = {
  //   title: "Blur, Transparency, Stability and much more in the May 2021 release of Project Sakura.",
  //   author: "LordShenron",
  //   date: "2018-08-03",
  //   desc: "Whats new in the latest release of Project Sakura? Check out.. ",
  // };
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
        {/* <h1>Blogs</h1> */}
        <RecentBlogComponent>
          <h2>Recent Blog</h2>
        </RecentBlogComponent>
        <OtherBlogComponent>
          {/* <h2>Secondary Section</h2> */}
          <TableBody>
            <Table>
              <TableRow>
                <Posts cardData={currentPosts} loading={loading} />
              </TableRow>
            </Table>
          </TableBody>
          
          
        </OtherBlogComponent>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
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

import { Container } from "semantic-ui-react";
import {Body} from "./styles";

import BlogCard from "../../BlogCard/BlogCard";
function Blog(){
    return(
        <Body>
            <Container>
                <BlogCard/>
            </Container>
        </Body>
    )
}
export default Blog;
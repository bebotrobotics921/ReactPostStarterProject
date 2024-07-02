import { Link, useLoaderData } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { ArticleCardImage } from "../../components/misc/ArticleCardImage";
import { Button, Container, SimpleGrid } from "@mantine/core";


function PostDetailsPage() {
  const posts = useLoaderData();

  return (
    <>
      <Container >
        <SimpleGrid cols={2}>
          {posts.map(post => (
            <ArticleCardImage key={post.title} {...post} />
          ))}
          
         
          <div>
            <Button component={Link}>Edit</Button>
          </div>
        </SimpleGrid>
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  // do something with this
  const res = await axios.get(`${DOMAIN}/api/posts/`+ params.id)
  return res.data;
};

export default PostDetailsPage;

import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button, Container, SimpleGrid } from "@mantine/core";
import { useLoaderData } from "react-router-dom";


function PostDetailsPage() {
  const posts = useLoaderData();
   console.log(posts)
  return (
    
      <Container >
        
        <SimpleGrid cols={2}>
        
      <Link to="/posts/id/edit">
      <Button>Edit</Button>
      </Link>
        
          
          
        </SimpleGrid>
      </Container>
    
  );
}

export const postDetailsLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`)
  console.log(res.data)
  return res.data;
};

export default PostDetailsPage;

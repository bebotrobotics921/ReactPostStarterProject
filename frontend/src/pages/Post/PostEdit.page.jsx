import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button, Container } from "@mantine/core";
import { useLoaderData } from "react-router-dom";


function PostEditPage() {
  const posts = useLoaderData();
   
  return (
    
      <Container >
      
      <Link to="/posts/id">
      <Button>Update</Button>
      </Link>
       
      </Container>
    
  );
}

export const postEditLoader = async ({ params }) => {
    const id = params.id
    const res = await axios.get(`${DOMAIN}/api/posts/${id}`)
    
    return res.data;
  };
  
  export default PostEditPage;
  
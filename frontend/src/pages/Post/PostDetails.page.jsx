import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button, Container } from "@mantine/core";
import { useLoaderData } from "react-router-dom";


function PostDetailsPage() {
  const posts = useLoaderData();
   
  return (
    <>
      <Container >
        <h1>{posts.title}</h1>
        <p>{posts.category}</p>
        <p>{posts.content}</p>
          <img src={posts.image} alt={posts.title}/>
         
      <Button><Link to="/posts/id/edit">Edit</Link></Button>
      <br></br>
      <br></br>
      <Button><Link to="/posts">Back To Posts</Link></Button>
      
        
      </Container>
      </> 
  );
}

export const postDetailsLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  return res.data;
};

export default PostDetailsPage;

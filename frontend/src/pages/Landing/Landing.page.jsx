import  LandingImage  from "../../assets/LandingImage.jpg"
import { Container } from "@mantine/core";

const Landing = () => {
  return (
    <Container>
      <p><strong>WELCOME TO BEAR PHOTOGRPHY!</strong></p>
      <img src={LandingImage} width={700} height={500}></img>
      
    </Container>
  );
};

export default Landing;

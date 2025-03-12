import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative; 
  height: 100vh;
  background-image: url("./images/sto.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 20px;

  @media (max-width: 1024px) {
    height: 60vh;
   
  }

  @media (max-width: 768px) {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    align-items: center;
   
  } 
  
  @media (max-width: 414px) {
   padding-bottom: 180px;
   
  }
  

  @media (max-width: 320px) {
   padding-bottom: 500px;
   
  }

 
`;

const Card = styled.div`
  bottom: -20px;
  left: -20px;  
  width: 60%;
  height: 75%;
  background-color: #fdf2e6;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    height: 500px;
    width: 90%;
  }

  @media (max-width: 768px) {
    left: 0;
    height: 390px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 414px) {
   padding-bottom: 470px;
  }

  @media (max-width: 320px) {
   padding-bottom: 550px;
  }
`;

const CardHeader = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 1.7rem;
  }
`;

const StoryPoints = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;

  li {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    text-align: left;

    li {
      font-size: 1.2rem;
    }
  }
`;

const CardImage = styled.div`
  position: absolute;
  bottom: 0;
  right: -10%;
  width: 200px;
  height: 70%;
  overflow: hidden;

  @media (max-width: 1024px) {
    right: -5%;
  }

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    width: 150px;
    height: auto;
    margin: 20px auto;
  }
`;

const ImageInsideCard = styled.img`
  width: 150%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
    width: 100%;
    height: auto;
  }
`;

const RightImage = styled.img`
  position: absolute;
  top: 50px;
  right: 0px;
  height: 440px;
  object-fit: cover;
  width: 20%;

  @media (max-width: 1024px) {
    width: 25%;
    height: auto;
    top: 15px;
  }

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    height: 440px;
    width: 100%;
   
  }
`;

const Button = styled.button`
  margin-top: 80px;
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #fff;
  color: #4b186c;
  border: 2px solid #4b186c;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #8f00ee;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 414px) {
    margin-top: 30px;
  }

  @media (max-width: 375px) {
    margin-top: 15px;
  }
`;

const DesignSection = () => {
  return (
    <Section>
      <RightImage src="./images/out.png" alt="Right side image" />
      <Card>
        <CardHeader>Crafting Chocolate Joy Since 1824</CardHeader>
        <StoryPoints>
          <li>1824 – John Cadbury opens his first shop in Birmingham.</li>
          <li>1905 – Dairy Milk is born, setting a new chocolate standard.</li>
          <li>1928 – The iconic “Glass and a Half” symbol is introduced.</li>
          <li>Today – Spreading joy worldwide with every bite.</li>
        </StoryPoints>
        <Button>Our story</Button>
        <CardImage>
          <ImageInsideCard src="./images/in.png" alt="Image inside card" />
        </CardImage>
      </Card>
    </Section>
  );
};

export default DesignSection;

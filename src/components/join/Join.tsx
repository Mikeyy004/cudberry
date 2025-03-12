import React from "react";
import styled from "styled-components";

const Join = () => {
  return (
    <Container>
      <Content>
        <TextSection>
          <h3>Let's Create Sweet Moments Together</h3>
          <p>
            Join us in crafting unforgettable experiences through partnerships,
            co-branding, and unique collaborations.
          </p>
          <Button>Let's Collaborate</Button>
        </TextSection>
        <ImageSection>
          <img src="./images/choc.png" alt="chop bucket" />
        </ImageSection>
      </Content>
    </Container>
  );
};

export default Join;

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #fff 25%, #4B186C 25%);
  padding: 2rem;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 375px) {
    display: grid;
    margin-top: 11rem;
    text-align: center;
  }
`;

const TextSection = styled.div`
  flex: 1;
  color: #fff;

  h3 {
    font-size: clamp(1.8rem, 2.5vw, 2.5rem);
    margin-bottom: 10px;
  }

  p {
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #4B186C;
  color: #ffffff;
  border: 2px solid #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #8f00ee;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    position: relative;
    top: -10;
    right: -10;
    margin-bottom: 8rem;

    @media (max-width: 768px) {
      max-width: 300px;
    }

    @media (max-width: 480px) {
      max-width: 250px;
    }
  }
`;

import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #4b186c;
  margin-bottom: 1rem;
  border-radius: 50px 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.125rem;
  max-width: 800px;
  margin: 0 auto 3rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(to bottom, #f3f0f4 50%, #4b186c 50%);
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 300px; /* Make the card longer */
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #4b186c;
    border-radius: 50px 50px 0 0; /* Apply border radius to the bottom corners */
    z-index: -1; /* Ensure it is behind the content */
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

const SmallImage = styled.img`
  width: 60px; /* Adjust the size as needed */
  height: auto;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const TextContainer = styled.div`
  background-color: #4b186c;
  padding: 1.5rem;
  text-align: center;
  border-radius:  0; /* Only top corners rounded */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const ProductName = styled.h3`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
`;

// Main Component
export default function Products() {
  const products = [
    {
      id: 1,
      name: "Cadbury Dairy Milk Fruitier And Nuttier Orange...",
      image: "/product-1.png",
    },
    {
      id: 2,
      name: "Cadbury Dairy Milk Fruitier And Nuttier Orange...",
      image: "/product-2.png",
      smallImage: "/product-5.png", // Add small image URL
    },
    {
      id: 3,
      name: "Cadbury Dairy Milk Fruitier And Nuttier Orange...",
      image: "/product-3.png",
    },
    {
      id: 4,
      name: "Cadbury Dairy Milk Fruitier And Nuttier Orange...",
      image: "/product-4.png",
      smallImage: "/product-5.png", // Add small image URL
    },
  ];

  return (
    <Container>
      <Title>New Products</Title>
      <Subtitle>
        Our chocolate makers are always inventing new ways to enjoy Cadbury chocolate. Take a look at our latest
        products here!
      </Subtitle>

      <Grid>
        {products.map((product) => (
          <Card key={product.id}>
            {product.smallImage && (
              <SmallImage src={product.smallImage} alt="Small decorative image" />
            )}
            <ImageContainer>
              <ProductImage src={product.image} alt={product.name} />
            </ImageContainer>
            <TextContainer>
              <ProductName>{product.name}</ProductName>
            </TextContainer>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
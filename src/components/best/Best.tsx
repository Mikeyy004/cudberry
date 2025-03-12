import React from "react";
import styled from "styled-components";
import type { IconType as IconComponent } from "react-icons";
import { RiArrowRightLine } from "react-icons/ri";

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #000000;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  flex: 1;
  min-height: 0; // Prevents grid from overflowing

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LeftCard = styled(Card)`
  @media (min-width: 768px) {
    grid-row: span 2;
  }
`;

const CardContent = styled.div`
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

const DiscoverLink = styled.a`
  color: #ae8c53;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  width: fit-content;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  min-height: 0;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RotatedImageContainer = styled(ImageContainer)`
  width: 80%;
  height: auto;
  position: absolute;
  top: -15%;
  right: -25%;
  /* transform: rotate(45deg); */
  /* transform-origin: top right; */
`;

const ImageContainer3 = styled(ImageContainer)`
  width: auto;
  height: auto;
  position: absolute;
  bottom: 20%;
  right: 0;
`;

const ImageContainer1 = styled(ImageContainer)`
  width: auto;
  height: auto;
  position: absolute;
  top: 20%;
  right: 0;
`;

const Image = styled.img`
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 0.25rem;
`;

const ArrowIcon = RiArrowRightLine as IconComponent;

export default function Best() {
  return (
    <Container>
      <Title>Best Selection</Title>

      <Grid>
        <LeftCard bg="#ecdac4">
          <CardContent>
            <CardTitle>
              The Perfect Gift for
              <br />
              Every Occasion
            </CardTitle>
            <DiscoverLink href="#">
              Discover more
            </DiscoverLink>
          </CardContent>
          <ImageContainer1>
            <Image src="/best-1.png" alt="Box of chocolates with gold ribbon" />
          </ImageContainer1>
        </LeftCard>

        <Card bg="#f0ece6">
          <CardContent>
            <CardTitle>
              Luxury Packaging
              <br />
              For Finest Pralines
            </CardTitle>
            <DiscoverLink href="#">
              Discover more
            </DiscoverLink>
          </CardContent>
          <RotatedImageContainer className="image-container-2">
            <Image src="/best-2.png" alt="Luxury chocolate packaging" />
          </RotatedImageContainer>
        </Card>

        <Card bg="#fafafa">
          <CardContent>
            <CardTitle>
              Chocolate Truffles, Buttons,
              <br />
              or Bites
            </CardTitle>
            <DiscoverLink href="#">
              Discover more
            </DiscoverLink>
          </CardContent>
          <ImageContainer3 className="image-container-3">
            <Image src="/best-3.png" alt="Chocolate truffles" />
          </ImageContainer3>
        </Card>
      </Grid>
    </Container>
  );
}
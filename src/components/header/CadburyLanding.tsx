import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const MainContainer = styled.main`
  min-height: 70vh;
  background-color: #4b1b78;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #4b1b78;
  position: relative;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none; /* Hide default nav links on smaller screens */
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 1rem;
  background: #4b1b78;
  width: 200px;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1001;

  @media (max-width: 1024px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.75rem;
  transition: color 0.2s;

  &:hover {
    color: #f7941d;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-top: 1rem;

  @media (min-width: 1025px) {
    margin-top: 0;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  padding-right: 2.5rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  outline: none;

  @media (max-width: 1024px) {
    width: 50%;
  }

  &::placeholder {
    color: white;
  }
`;

const StyledSearchIcon = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const SearchIconWrapper = () => (
  <StyledSearchIcon>
    <FiSearch />
  </StyledSearchIcon>
);

const HeroSection = styled.section`
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 68vh;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 2rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  z-index: 10;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #f7941d;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: white;
  max-width: 36rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ShopButton = styled.button`
  padding: 1rem 3rem;
  border: 2px solid white;
  border-radius: 0.375rem;
  color: white;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    background: white;
    color: #4b1b78;
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

  @media (max-width: 375px) {
    margin-bottom: 100px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 10%;
  left: 70%;
  transform: translateX(-50%);
  z-index: 2;
  margin-top: 3rem;

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 0;
    top: 0;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 0;
    top: 15rem;
  }
  @media (max-width: 1080px) {
    margin-top: 7rem;
    width: 80%;
    right: 4px;
  }
`;

const ProductImage = styled.img`
  width: 80%;
  margin-top: 4rem;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    display: none;
    width: 100%;
    height: auto;
  }
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

const IndicatorContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  position: relative;
  top: 3rem;
  background-color: #260b05;
  padding: 2.5rem 40.7rem;
  border-radius: 0px;
  z-index: 1;

  @media (max-width: 414px) {
padding: 2rem 3.2rem;


  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
    top: 2rem;
    width: 700px;
    justify-content: center;
    margin: 0 auto;
  }

  @media (min-width: 834px) and (max-width: 1194px) {
    padding: 2.5rem 30.4rem;
  }

  width: 50px;
`;

const Indicator = styled.button<{ active?: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: white;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  border: none;
  padding: 0;
  cursor: pointer;


`;

const CadburyLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MainContainer>
      <Nav>
        <Logo src="./image-103.png" alt="Cadbury Logo" />
        
        {/* Regular Desktop Links */}
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Explore</NavLink>
          <NavLink href="#">Recipes</NavLink>
          <NavLink href="#">Gifting</NavLink>
          <SearchContainer>
            <SearchInput type="text" placeholder="Search..." />
            <SearchIconWrapper />
          </SearchContainer>
        </NavLinks>

        {/* Hamburger Icon */}
        <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX size={24} color="white" /> : <FiMenu size={24} color="white" />}
        </HamburgerMenu>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen}>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Explore</NavLink>
          <NavLink href="#">Recipes</NavLink>
          <NavLink href="#">Gifting</NavLink>
          <SearchContainer>
            <SearchInput type="text" placeholder="Search..." />
            <SearchIconWrapper />
          </SearchContainer>
        </MobileMenu>
      </Nav>

      <HeroSection>
        <ContentContainer>
          <Title>Smooth, Creamy, Irresistible</Title>
          <Subtitle>
            Indulge in the rich taste of Cadbury Dairy Milk – the nation's
            favorite chocolate.
          </Subtitle>
          <ShopButton>SHOP NOW</ShopButton>
        </ContentContainer>
        <ImageContainer>
          <ProductImage
            src="/landing-1.png"
            alt="Cadbury Dairy Milk Chocolate"
          />
        </ImageContainer>

        <SlideIndicators>
          <IndicatorContainer>
            <Indicator />
            <Indicator active />
            <Indicator />
          </IndicatorContainer>
        </SlideIndicators>
      </HeroSection>
    </MainContainer>
  );
};

export default CadburyLanding;
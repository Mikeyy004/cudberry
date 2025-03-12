import type React from "react";
import styled from "styled-components";
import type { IconType } from "react-icons";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color:  #4b186c;
  color: #fff;
  padding: 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
    text-align: left;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: #4b186c;
  padding: 0.5rem;
  border: 1px solid #fff;
  border-right: none;
  color: #fff;

  &::placeholder {
    color: #ccc;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.7rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #007bff;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
    text-align: left;
    gap: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #007bff;
    }
  }
`;

const SocialIcon: React.FC<{ icon: IconType }> = ({ icon: Icon }) => {
  return <Icon />;
};

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      {/* Top Section */}
      <FooterTop>
        <Column>
          <Title><img src="./image-103.png" alt="footer-image" /></Title>
          <p>Fun Fact 101: Cocoa and dark chocolate have a wide variety of powerful antioxidants. In fact, they have way more than most other foods.</p>
          <p>1-800-861-0080
          cadburychocolate@gmail.com</p>
        </Column>

        <Column>
          <Title>Quick Links</Title>
          <LinkList>
            <LinkItem>
              <Link href="#">Login</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Register</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Blog</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Contact Us</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Shipping And Refund</Link>
            </LinkItem>
          </LinkList>
        </Column>

        <Column style={{paddingRight: '2rem'}}>
          <Title>About Us</Title>
          <p>
            We are dedicated to providing excellent services to our customers. Our mission is to make a positive
            impact in the world through innovation and sustainability.
          </p>
        </Column>

        <Column>
          <Title>Newsletter</Title>
          <p>Stay updated with our latest news and offers.</p>
          <InputContainer>
            <Input type="email" placeholder="Enter your email" />
          </InputContainer>
          <Button style={{width: "100%", fontWeight: "bold" }}>SUBSCRIBE</Button>
        </Column>
      </FooterTop>

      {/* Bottom Section */}
      <FooterBottom>
        <p>© {new Date().getFullYear()} Cudberry. All rights reserved.</p>
        <SocialIcons>
          <a href="#" aria-label="Facebook">
            <SocialIcon icon={FaFacebook} />
          </a>
          <a href="#" aria-label="Twitter">
            <SocialIcon icon={FaTwitter} />
          </a>
          <a href="#" aria-label="Instagram">
            <SocialIcon icon={FaInstagram} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <SocialIcon icon={FaLinkedin} />
          </a>
          <a href="#" aria-label="Email">
            <SocialIcon icon={FaEnvelope} />
          </a>
        </SocialIcons>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

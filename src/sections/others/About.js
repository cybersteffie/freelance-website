import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedCursor from "react-animated-cursor";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { Section, Title, Text, Span } from "../../components/Core";
import imgPhoto from "../../assets/image/jpg/headshots/steffie-harner-cyberpunk-concept-artist.jpeg";
// import imgSignLight from "../../assets/image/png/signature.png";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
        <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="245,246,248"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={7}
        />
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="dark" variant="secSm">
                  find the beauty in chaos.
                </Title>
                <Text
                  color="light"
                  variant="p"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  tokyo-based concept artist, model, and ar/web developer. i create
                  memorable digital art & experiences for brands.
                </Text>
                {/* <div className="mt-5">
                  <img src={imgSignLight} alt="sign" className="img-fluid" />
                </div> */}
                <Text color="dark" variant="small" className="font-weight-bold mt-5">
                  follow me on social
                </Text>
                <Text color="dark" variant="large" className="font-weight-bold">
                  @steffieharner
                </Text>
                <div className="mt-2 d-flex">
                <LinkSocial
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold mr-3"
                  >
                    <FaInstagram />
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
                  >
                    <FaTwitter/>
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.facebook.com/steffieharnerofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    <FaFacebookF />
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.github.com/steffieharner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    <FaGithub />
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.linkedin.com/in/steffieharner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    <FaLinkedin />
                  </LinkSocial>
                </div>
                <Text className="mt-5 font-weight-bold" variant="p">let's work together →
                    <a
                      href="mailto:hi@steffieharner.com"
                      className="font-weight-bold"
                    >
                      <Span color="light"> hi@steffieharner.com</Span>
                    </a>
                  </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;

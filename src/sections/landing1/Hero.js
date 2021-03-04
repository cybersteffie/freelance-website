import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgL from "../../assets/image/png/portrait-1.png";

const ImgRight = styled.img`
  max-width: 100%;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="7" className="mb-5 mb-lg-0">
              <Box>
                <Text
                  variant="intro"
                  mb={5}
                  className="text-lowercase"
                  color="tag"
                  mb="40px"
                >
                  freelance model ・ ar/web developer
                </Text>
                <Title variant="hero">
                  i'm a tokyo-based<br/>
                  multidisciplinary creator.
                </Title>
                <Row>
                <Box m="5px" mt="50px">
                  <Link
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <Button>see work</Button>
                  </Link>
                </Box>
                <Box m="5px" mt="50px">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <Button arrowRight>contact</Button>
                  </Link>
                </Box>
                </Row>
              </Box>
            </Col>
            <Col lg="5" md="8" sm="9">
              <div className="text-md-center text-lg-right text-center">
                <div className="img-main">
                  <ImgRight src={imgL} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;

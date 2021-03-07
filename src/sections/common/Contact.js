import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, LinkContact } from "../../components/Core";
import bgFooter from "../../assets/image/png/subscribe-pattern.png";

const SectionStyled = styled(Section)`
  &.pattern::before {
    position: absolute;
    bottom: -150px;
    content: "";
    width: 120%;
    height: 150%;
    background: url(${bgFooter}) bottom center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Contact = ({ pattern = true }) => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled
        className={`position-relative ${pattern ? "pattern" : ""}`}
      >
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="11" xl="10" className="text-center">
              <Box>
                <Title variant="secSm">
                  Taking new projects, so if you're a cyber creator, 3d artist & like to chat please get in touch.
                </Title>

                <Box
                  className="text-center d-flex justify-content-center"
                  mt={["3rem", null, "4rem"]}
                >
                  <div className="d-flex flex-column flex-lg-row justify-content-center">
                    <LinkContact
                      href="mailto:hi@steffieharner.com"
                      target="_blank"
                      className="mb-2 mb-lg-0"
                    >
                      hi@steffieharner.com
                    </LinkContact>
                    <span className="divider mx-2 mx-lg-4 d-none d-lg-block">
                      |
                    </span>
                  </div>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Contact;

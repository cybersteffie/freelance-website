import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

import { Section, Title, Text, Span, Box } from "../../components/Core";
import ContactForm from "../../components/ContactForm";
import { device } from "../../utils";

const ContactCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  margin-top: 2rem;
  @media ${device.lg} {
    margin-top: 250px;
  }
`;

const Contact = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <Box className="pr-lg-5">
                <Title color="light" variant="secSm" mb="2rem">
                  contact me
                </Title>
                <Text color="light" mb="2.75rem">
                  have a project or question? send me a message.
                </Text>
                <ContactForm theme="dark" />
              </Box>
            </Col>
            <Col lg="5">
              <ContactCard className="p-5 ml-lg-5">
                <div className="pb-2">
                  <Text color="light">email me at</Text>
                  <a
                    href="mailto:hi@steffieharner.com"
                    className="font-weight-bold"
                  >
                    <Span color="primary">
                      <FaEnvelope /> hi@steffieharner.com
                    </Span>
                  </a>
                </div>
                <div className="pb-2">
                  <Text color="light">tweet me</Text>
                  <a
                    href="https://twitter.com/steffieharner"
                    className="font-weight-bold"
                  >
                    <Span color="primary">
                      <FaTwitter /> @steffieharner
                    </Span>
                  </a>
                </div>
                <div className="pb-2">
                  <Text color="light">dm me on</Text>

                  <a
                    href="mailto:hi@steffieharner.com"
                    className="font-weight-bold"
                  >
                    <Span color="primary">
                      <FaInstagram /> @steffieharner
                    </Span>
                  </a>
                </div>
                <div className="pb-2">
                  <Text color="light">check my repos</Text>
                  <a
                    href="https://github.com/steffieharner"
                    className="font-weight-bold"
                  >
                    <Span color="primary">
                      <FaGithub /> @steffieharner
                    </Span>
                  </a>
                </div>
              </ContactCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Contact;

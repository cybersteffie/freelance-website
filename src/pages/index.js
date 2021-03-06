import React from "react";
import { Element } from "react-scroll";
import AnimatedCursor from "react-animated-cursor";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Works from "../sections/landing1/Works";
import Contact from "../sections/landing1/Contact";

const IndexPage = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="130,136,228"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={7}
      />
      <PageWrapper>
        <Hero />
        <Element name="works">
          <Works />
        </Element>
        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";

import { device } from "../../utils";

const Paragraph = styled.p`
  margin-bottom: 0;
  font-weight: 400;
  font-size: 1.0625rem;
  line-height: 1.71;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const ParagraphLg = styled(Paragraph)`
  font-size: 21px;
  font-weight: 400;
  line-height: 38px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const ParagraphSmall = styled(Paragraph)`
  font-size: 16px;
  line-height: 28px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const ParagraphTag = styled(Paragraph)`
  font-size: 0.7rem;
  line-height: 1.63;
  letter-spacing: 1.63px;
  font-weight: 700;
  text-transform: uppercase;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const ParagraphIntro = styled(Paragraph)`
  font-size: calc(10px * ((100vw - 320px) / 680));
  line-height: 1.63;
  letter-spacing: 1.63px;
  font-weight: 500 !important;
  text-transform: uppercase;

  @media ${device.sm} {
    font-size: calc(20px + 2 * ((100vw - 320px) / 680));
    line-height: 62px;
  }

  @media ${device.lg} {
    font-size: calc(20px + 2 * ((100vw - 320px) / 680));
    line-height: 70px;
  }

  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Text = ({ variant = "lg", ...props }) => {
  let TextRender;

  switch (variant) {
    case "lg":
      TextRender = ParagraphLg;
      break;
    case "small":
      TextRender = ParagraphSmall;
      break;
    case "tag":
      TextRender = ParagraphTag;
      break;
    case "intro":
      TextRender = ParagraphIntro;
      break;
    case "p":
      TextRender = Paragraph;
      break;
    default:
      TextRender = ParagraphLg;
  }

  return <TextRender color="text" {...props} />;
};

export default Text;

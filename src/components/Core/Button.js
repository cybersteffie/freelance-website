import React from "react";
import styled from "styled-components";
import {
  color,
  background,
  space,
  border,
  typography,
  shadow,
  flexbox,
  layout,
} from "styled-system";

const ButtonStyled = styled.button`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.63px;
  text-transform: uppercase;
  padding: 23px 30px;
  box-shadow: 0 32px 54px rgba(3, 3, 3, 0.12);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  transform: perspective(1px) translateZ(0);
  position: relative;
  overflow: hidden;
  border: none;
  outline: none !important;
  white-space: nowrap;
  clip-path: polygon(-10% -10%, 110% -10%, 110% 110%, 10% 110%, -10% 40%);
  ${color};
    background-image: linear-gradient(270deg,#6e8ce6,#f36fda)!important;
  /* ${border}; */
  ${space};
  ${typography};
  ${shadow};
  ${flexbox};
  ${layout};
  transition: 0.4s ease-out;

  &:hover,
  &:focus,
  &:active {
    transform: translateY(-10px);
    box-shadow: 0 32px 54px rgba(3, 3, 3, 0.14);
		display: block;
		content: attr(data-glitch);
		opacity: .8;
	} &:after {
		color: #f0f;
		z-index: -2;
	} &:before {
		color: #0ff;
		z-index: -1;
	}
	&:hover {
		&:before {
			animation: glitch .3s cubic-bezier(.25, .46, .45, .94) both 5
		}
		&:after {
			animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both 5
		}
	}
  }

  @keyframes glitch {
	0% {
		transform: translate(0)
	}
	20% {
		transform: translate(-5px, 5px)
	}
	40% {
		transform: translate(-5px, -5px)
	}
	60% {
		transform: translate(5px, 5px)
	}
	80% {
		transform: translate(5px, -5px)
	}
	to {
		transform: translate(0)
	}
}
`;

const Button = ({
  variant = "primary",
  color = "#fff",
  arrowRight = false,
  children,
  ...rest
}) => {
  return (
    <ButtonStyled variant={variant} color={color} bg={variant} {...rest}>
      {children}
      {arrowRight && (
        <svg
          id="SVGDoc"
          width="18"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 18 12"
          css={`
            margin-left: 1.5rem;
          `}
        >
          <defs></defs>
          <desc>Generated with Avocode.</desc>
          <g>
            <g>
              <title>tail-right</title>
              <g>
                <title>Path</title>
                <path
                  d="M1,5.5h16"
                  fillOpacity="0"
                  fill="#ffffff"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeOpacity="1"
                  stroke="#ffffff"
                  strokeMiterlimit="20"
                  strokeWidth="2"
                ></path>
              </g>
              <g>
                <title>Path</title>
                <path
                  d="M12,1v0l5,5v0l-5,5v0"
                  fillOpacity="0"
                  fill="#ffffff"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeOpacity="1"
                  stroke="#ffffff"
                  strokeMiterlimit="20"
                  strokeWidth="2"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      )}
    </ButtonStyled>
  );
};

export default Button;

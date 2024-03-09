import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-colo: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as == "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as == "h2" &&
    css`
      font-size: 2rem;
      font-weight: 300;
    `}

${(props) =>
    props.as == "h3" &&
    css`
      font-size: 1rem;
      font-weight: 100;
    `}

    
  line-height: 1.4;
`;

export default Heading;

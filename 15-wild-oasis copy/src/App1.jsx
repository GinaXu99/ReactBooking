import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Button } from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

/** 1. styled component
 * -> only scoped to H1 but its resuable component
 * -> this component can accept all props react component can receive
 * -> its a REACT components so start with CAPs
 *
 * 2. globalstyles component
 */

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>

            <div>
              <Heading as="h2">Checkin and Checkout</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => alert("checkedin")}
              >
                Check in
              </Button>
              <Button
                variation="secondary"
                size="medium"
                onClick={() => alert("checkedout")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="text" placeholder="number of guests"></Input>
              <Input type="text" placeholder="number of guests"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;

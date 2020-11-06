import React from "react";
import styled from "styled-components";
import vector from "./images/vector.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container03>
        <Router>
          <Text>
            <img src={vector} alt="logo" />
          </Text>
          <Text1>
            <Link to="/">Home</Link>
          </Text1>
          <Text2>
            {" "}
            <Link className="link" to="/Catalog">
              Catalog
            </Link>
          </Text2>
          <Text3>
            {" "}
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </Text3>
        </Router>
      </Container03>
    </>
  );
};
export default Navbar;

const Container03 = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  flex-wrap: nowrap;
  align-self: flex-start;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 479px) {
    display: none;
  }
`;
const Text = styled.span`
  font-family: barlow condensed;
  color: #ffffff;
  text-decoration: none;
  color: white;
  font-size: 25px;
  align-self: center;
  margin-top: 10px;
  text-align: center;
  margin-left: 40px;

  .link {
    text-decoration: none;
    color: white;
  }
`;

const Text1 = styled(Text)`
  &.foo {
    text-decoration: none;
    color: white;
  }
`;

const Text2 = styled(Text)``;

const Text3 = styled(Text)``;

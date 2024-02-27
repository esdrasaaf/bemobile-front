"use client";
import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  const logo = require("../assets/smallLogo.png");

  return (
    <Container>
      <Image src={logo} priority={true} alt="bemobile logotype" />
    </Container>
    
  );
}

//Styled Components
const Container = styled.header`
  background-color: #ffffff;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 40px;
  box-sizing: border-box;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.3);
`;

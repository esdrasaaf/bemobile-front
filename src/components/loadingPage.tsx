"use client";
import styled from "styled-components";
import Image from "next/image";
import { TailSpin } from "react-loader-spinner";

export default function LoadingPage() {
  const logo = require("../assets/largeLogo.png");

  return (
    <Container>
      <Image src={logo} priority={true} alt="bemobile logotype" />

      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#5a84c0"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Container>
  );
}

//Styled Components
const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

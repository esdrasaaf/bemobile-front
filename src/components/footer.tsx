import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <a href="https://github.com/esdrasaaf" target="_blank">
        @esdrasaaf
      </a>
    </Container>
  );
}

//Styled Components
const Container = styled.footer`
  margin-top: 30px;
  width: 100%;
  text-align: center;

  a {
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    color: #9E9E9E;
  }
`;

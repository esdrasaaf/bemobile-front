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
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  position: absolute;
  bottom: 0;
  left: 0;

  a {
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    color: #9e9e9e;
  }

  //Responsive Layout
  @media (max-width: 768px) {
    position: initial;
  }
`;

import styled from "styled-components";

export default function TableSummary() {
  // media query é em 1650px

  return (
    <Container>
      <span>Foto</span>
      <span>Nome</span>
      <span>Cargo</span>
      <span>Data de Admissão</span>
      <span>Telefone</span>
      <div className="whiteDot"></div>
    </Container>
  );
}

//Styled Components
const Container = styled.div`
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.4);
  background: linear-gradient(180deg, #5a84c0 0%, #594ed2 100%);
  width: 100%;
  height: 50px;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;

  //Container Childs
  :nth-child(1) {
    left: 4%;
  }
  :nth-child(2) {
    left: 17%;
  }
  :nth-child(3) {
    left: 39.35%;
  }
  :nth-child(4) {
    left: 56.8%;
  }
  :nth-child(5) {
    left: 81%;
  }

  span {
    position: absolute;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }

  .whiteDot {
    display: none;
    background-color: white;
    height: 10px;
    width: 10px;
    border-radius: 100%;
  }

  //Responsive Layout
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0px 30px 0px 25px;
    box-sizing: border-box;

    .whiteDot {
      display: initial;
      margin-left: 15px;
    }

    span {
      position: initial;
    }

    :nth-child(3) {
      display: none;
    }
    :nth-child(4) {
      display: none;
    }
    :nth-child(5) {
      display: none;
    }
  }
`;

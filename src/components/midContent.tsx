import styled from "styled-components";
import Image from "next/image";
import { EmployeeListProps } from "@/models/Employee";
import ItemList from "./itemList";
import TableSummary from "./tableSummary";

export default function MidContent(props: EmployeeListProps) {
  const { employeeList } = props;
  const searchIcon = require("../assets/magnifierIcon.svg");

  //Largura para mudar no mediaquery é 1300px

  return (
    <Container>
      <TitleAndSearch>
        <h4>Funcionários</h4>

        <SearchArea>
          <input placeholder="Pesquisar" />

          <Image src={searchIcon} alt="search glass" />
        </SearchArea>
      </TitleAndSearch>

      <InfoTable>
        <TableSummary></TableSummary>

        <EmployeeList>
          {employeeList.map((e, idx) => {
            return <ItemList key={idx} image={e.image} name={e.name} job={e.job} admissionDate={e.admission_date} phone={e.phone}/>;
          })}
        </EmployeeList>
      </InfoTable>
    </Container>
  );
}

//Styled Components
const Container = styled.main`
  margin-top: 40px;
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const TitleAndSearch = styled.section`
  margin-bottom: 40px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 300px;
  height: 50px;

  input {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 1px solid rgba(223, 223, 223, 1);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding: 12px 45px 12px 16px;
    box-sizing: border-box;
    color: black;
  }
  ::placeholder {
    color: rgba(158, 158, 158, 1);
  }

  img {
    cursor: pointer;
    right: 12px;
    height: 25px;
    width: 25px;
    color: #9E9E9E;
    position: absolute;
  }
`;

const InfoTable = styled.section`
  width: 100%;
  height: fit-content;
`;

const EmployeeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 100%;
  height: fit-content;
`;

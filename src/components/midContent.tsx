import styled from "styled-components";
import Image from "next/image";
import { EmployeeListProps } from "@/models/Employee";
import ItemList from "./itemList";
import TableSummary from "./tableSummary";
import { useState } from "react";

export default function MidContent(props: EmployeeListProps) {
  const { employeeList } = props;
  const [dataSearch, setDataSearch] = useState("");
  const [newEmployeeList, setNewEmployeeList] = useState(employeeList);
  const searchIcon = require("../assets/magnifierIcon.svg");
  const excludeIcon = require("../assets/excludeIcon.svg");

  //Largura para mudar no mediaquery é 1650px
  function filterEmployees(value: string) {
    const formatedDataSearch = value
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[^a-zA-Z0-9]/g, "");
    const dataSearchLength = formatedDataSearch.length;

    const employeeArr = employeeList.filter((employee) => {
      if (
        employee.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[^a-zA-Z0-9]/g, "")
          .slice(0, dataSearchLength) === formatedDataSearch
      ) {
        return (
          employee.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[^a-zA-Z0-9]/g, "")
            .slice(0, dataSearchLength) === formatedDataSearch
        );
      }

      if (
        employee.job
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]/g, "")
          .slice(0, dataSearchLength) === formatedDataSearch
      ) {
        return (
          employee.job
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, "")
            .slice(0, dataSearchLength) === formatedDataSearch
        );
      }

      if (
        employee.phone
          .toString()
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]/g, "")
          .slice(0, dataSearchLength) === formatedDataSearch
      ) {
        return (
          employee.phone
            .toString()
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, "")
            .slice(0, dataSearchLength) === formatedDataSearch
        );
      }
    });

    setNewEmployeeList(employeeArr);
  }

  return (
    <Container>
      <TitleAndSearch>
        <h4>Tabela de Funcionários</h4>

        <SearchArea>
          <input
            placeholder="Pesquisar"
            onChange={(e) => {
              setDataSearch(e.target.value);
              filterEmployees(e.target.value);
            }}
            value={dataSearch}
          />

          <button type="submit">
            {dataSearch === "" ? (
              <Image src={searchIcon} alt="search glass" />
            ) : (
              <Image
                src={excludeIcon}
                alt="search glass"
                onClick={() => {
                  setDataSearch("");
                }}
              />
            )}
          </button>
        </SearchArea>
      </TitleAndSearch>

      <InfoTable>
        <TableSummary />

        {newEmployeeList.length === 0 ? (
          <span className="message">
            Não encontramos nenhum funcionário com esta identificação no banco
            de dados! :(
          </span>
        ) : (
          <EmployeeList>
            {(dataSearch === "" ? employeeList : newEmployeeList).map(
              (e, idx) => {
                return (
                  <ItemList
                    key={idx}
                    image={e.image}
                    name={e.name}
                    job={e.job}
                    admissionDate={e.admission_date}
                    phone={e.phone}
                  />
                );
              }
            )}
          </EmployeeList>
        )}
      </InfoTable>
    </Container>
  );
}

//Styled Components
const Container = styled.main`
  max-width: 1050px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 40px 25px;
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    height: fit-content;
    width: 100%;
    align-items: start;
    margin-bottom: 30px;
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

  button {
    border: none;
    right: 12px;
    height: 25px;
    width: 25px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);

    img {
      cursor: pointer;
      height: 25px;
      width: 25px;
    }
  }

  //Responsive Layout
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoTable = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  .message {
    text-align: center;
    width: 60%;
    margin-top: 40px;
    color: #9e9e9e;
    font-weight: 500;
    font-size: 20px;

    //Responsive Layout
    @media (max-width: 768px) {
      font-weight: 400;
      font-size: 18px;
    }
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9e9e9e;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
`;

const EmployeeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 100%;
  max-height: 487px;
  overflow-y: scroll;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);

  //Responsive Layout
  @media (max-width: 768px) {
    overflow-y: visible;
    max-height: none;
  }
`;

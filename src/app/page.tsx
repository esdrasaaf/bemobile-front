"use client";
import LoadingPage from "@/components/loadingPage";
import Header from "@/components/header";
import MidContent from "@/components/midContent";
import Footer from "@/components/footer";
import { Employee } from "@/models/Employee";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    async function getEmployeeData() {
      try {
        const response = await axios.get("http://localhost:3000/employees");
        setEmployeeList(response.data);
        setShowPage(true);
      } catch (error) {
        console.log(error);
      }
    }

    getEmployeeData();
  }, []);

  return (
    <>
      {showPage ? (
        <Container>
          <Header />

          <MidContent employeeList={employeeList} />

          <Footer />
        </Container>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

//Styled Components
const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
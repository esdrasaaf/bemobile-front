"use client";
import Header from "@/components/header";
import LoadingPage from "@/components/loadingPage";
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

        setTimeout(() => {
          setShowPage(true);
        }, 2000)
      } catch (error) {
        console.log(error);
      }
    }

    getEmployeeData();
  }, []);

  return (
    <>
      {
        showPage
        ?
        <Container>
          <Header />
        </Container>
        :
        <LoadingPage />
      }
    </>
  );
}

//Styled Components
const Container = styled.main``;
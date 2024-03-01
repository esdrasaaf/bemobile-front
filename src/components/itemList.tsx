"use client";

import styled from "styled-components";
import { EmployeeProps } from "@/models/Employee";
import { useState } from "react";
import Image from "next/image";

export default function ItemList(props: EmployeeProps) {
  const { name, job, admissionDate, phone, image } = props;
  const date = new Date(admissionDate);
  const formatedAdmissionDate = date.toLocaleDateString();
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const downArrow = require("../assets/downArrow.svg");
  const upArrow = require("../assets/upArrow.svg");

  function formatPhoneNumber(phone: number) {
    // Remove all NaN characters
    const allNumbers = phone.toString().replace(/\D/g, "");

    // Get country code
    const countryCode = "+" + allNumbers.substring(0, 2);

    // Get DDD and remainder of the number
    const ddd = allNumbers.substring(2, 4);
    const remainderOfTheNumber = allNumbers.substring(4);

    // Final number with DDD
    const finalNumber = ` (${ddd}) ${remainderOfTheNumber.substring(
      0,
      5
    )}-${remainderOfTheNumber.substring(5)}`;

    return countryCode + finalNumber;
  }

  const formatedPhoneNumber = formatPhoneNumber(phone);

  return (
    <Container>
      <VisibleInfo>
        <img width={35} height={35} src={image} alt="employee face" />
        <span>{name}</span>
        <span className="willBeHidden">{job}</span>
        <span className="willBeHidden">{formatedAdmissionDate}</span>
        <span className="willBeHidden">{formatedPhoneNumber}</span>
        {showMoreInfo ? (
          <Image
            className="willBeShown"
            width={35}
            height={35}
            src={upArrow}
            alt="up arrow"
            onClick={() => {
              setShowMoreInfo(false);
            }}
          />
        ) : (
          <Image
            className="willBeShown"
            width={35}
            height={35}
            src={downArrow}
            alt="down arrow"
            onClick={() => {
              setShowMoreInfo(true);
            }}
          />
        )}
      </VisibleInfo>

      <HiddenInfo $isVisible={showMoreInfo}>
        <div>
          <h2>Cargo</h2>
          <span>{job}</span>
        </div>
        <div>
          <h2>Data de admissão</h2>
          <span>{formatedAdmissionDate}</span>
        </div>
        <div>
          <h2>Telefone</h2>
          <span>{formatedPhoneNumber}</span>
        </div>
      </HiddenInfo>
    </Container>
  );
}

//Styled Components
const Container = styled.li`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);

  //Responsive Layout
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const VisibleInfo = styled.div`
  width: 100%;
  min-height: 60px;
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    border-radius: 100%;
  }

  span {
    position: absolute;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    left: 4px;
    letter-spacing: 0em;
    text-align: left;
    color: #1c1c1c;
  }

  .willBeShown {
    display: none;
  }

  //Container Childs
  :nth-child(1) {
    left: 4%;
  }
  :nth-child(2) {
    left: 17%;
  }
  :nth-child(3) {
    left: 40%;
  }
  :nth-child(4) {
    left: 58%;
  }
  :nth-child(5) {
    left: 82%;
  }

  //Responsive Layout
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    padding: 0px 17px 0px 25px;
    box-sizing: border-box;

    .willBeHidden {
      display: none;
    }

    .willBeShown {
      display: initial;
      cursor: pointer;
    }

    img {
      position: initial;
    }

    span {
      position: initial;
    }
  }
`;

const HiddenInfo = styled.div<{ $isVisible?: boolean }>`
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 140px;

  :nth-child(1) {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  :nth-child(3) {
    border: none;
  }

  div {
    :nth-child(1) {
      border: none;
      font-weight: 500;
    }

    padding: 0px 20px;
    height: 33.3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px;
    border-bottom: 2px dotted rgba(223, 223, 223, 1);
  }
`;

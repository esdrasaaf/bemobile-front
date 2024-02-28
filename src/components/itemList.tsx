import styled from "styled-components";
import { EmployeeProps } from "@/models/Employee";

export default function ItemList(props: EmployeeProps) {
  const { name, job, admissionDate, phone, image } = props;
  const date = new Date(admissionDate);
  const formatedAdmissionDate = date.toLocaleDateString();

  function formatPhoneNumber(phone: number) {
    // Remove all NaN characters
    const allNumbers = phone.toString().replace(/\D/g, '');
  
    // Get country code
    const countryCode = "+" + allNumbers.substring(0, 2);
  
    // Get DDD and remainder of the number
    const ddd = allNumbers.substring(2, 4);
    const remainderOfTheNumber = allNumbers.substring(4);
  
    // Final number with DDD
    const finalNumber = ` (${ddd}) ${remainderOfTheNumber.substring(0, 5)}-${remainderOfTheNumber.substring(5)}`;
  
    return countryCode + finalNumber;
  }

  const formatedPhoneNumber = formatPhoneNumber(phone);

  return (
    <Container>
      <img width={35} height={35} src={image} alt="employee face" />
      <span>{name}</span>
      <span>{job}</span>
      <span>{formatedAdmissionDate}</span>
      <span>{formatedPhoneNumber}</span>
    </Container>
  );
}

//Styled Components
const Container = styled.li`
  background-color: #ffffff;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  position: relative;

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
`;

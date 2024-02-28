export type Employee = {
  id: number;
  name: string;
  job: string;
  admission_date: Date;
  phone: number;
  image: string;
};

export type EmployeeListProps = {
  employeeList: Employee[];
};

export type EmployeeProps = {
  name: string;
  job: string;
  admissionDate: Date;
  phone: number;
  image: string;
}
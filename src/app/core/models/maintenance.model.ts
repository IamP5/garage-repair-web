export interface Maintenance {
  id: string;
  status: string;
  description: string;
  car: Car;
  customer: Customer;
}

interface Customer {
  id: string;
  name: string;
  cpf: string;
}

interface Car {
  id: string;
  plate: string;
  model: string;
  brand: string;
}
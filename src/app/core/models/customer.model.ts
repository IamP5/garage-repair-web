export interface Customer {
  id: string;
  name: string;
  cpf: string;
  car: Car[];
}

interface Car {
  id: string;
  model: string;
  brand: string;
  plate: string;
}
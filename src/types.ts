export interface Marketing {
  id: number;
  name: string;
  image: string;
  email: string;
  phone: string;
  address: string;
}

export interface Jemaah {
  id: number;
  nId: string;
  name: string;
  image: string;
  status: "pre-departure" | "departure" | "post-departure" | "canceled";
}

export interface DepartureSchedule {
  id: number;
  start: Date;
  end: Date;
}

export interface Departure {
  id: number;
  jemaah: Jemaah;
  marketing: Marketing;
  schedule: DepartureSchedule;
}

export interface Package {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface Income {
  id: number;
  description: string;
  amount: number;
  date: Date;
}

export interface Outcome {
  id: number;
  description: string;
  amount: number;
  date: Date;
}

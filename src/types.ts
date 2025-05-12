export interface Plan {
  id: string;
  name: string;
  price: number;
  data: string;
  calls: string;
  sms: string;
  features: string[];
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}
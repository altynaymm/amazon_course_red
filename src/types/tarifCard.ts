export type TariffCardProps = {
  id: number;
  oldPrice: number;
  price: number;
  services: Services[];
  img: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  subtitle: string;
};

export type Services = {
  name: string;
  included: boolean;
};

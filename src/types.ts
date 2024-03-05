export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: CompanyType,
    address: AddressType
  }

export interface CompanyType {
  name: string;
  catchPhrase: string | null,
  bs?: string | null
}

export interface AddressType {
  street: string,
  suite: string,
  city: string,
  zipcode?: string,
  geo?: any;
}
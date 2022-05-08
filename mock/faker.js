import { faker } from '@faker-js/faker/locale/zh_CN';

export const city = () => faker.address.city();

export const dog = () => faker.animal.dog();

export const color = () => faker.commerce.color();

export const array = (n) => faker.datatype.array(n);

export const boolean = () => faker.datatype.boolean();

export const datetime_recent = () => faker.date.recent();

export const datetime_soon = () => faker.date.soon();

export const number = () => faker.datatype.number();

export const string = () => faker.datatype.string();

export const text = () => faker.lorem.text();

export const name = () => `${faker.name.lastName()}${faker.name.firstName()}`;

export const phone = () => faker.phone.phoneNumber();

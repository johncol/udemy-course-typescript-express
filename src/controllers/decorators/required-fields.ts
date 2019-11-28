import 'reflect-metadata';

import { Metadata } from './enums/Metadata';

export const RequiredFields = (...fields: string[]) => {
  return (target: any, key: string, descriptor: PropertyDescriptor): void => {
    Reflect.defineMetadata(Metadata.requiredFields, fields, target, key);
  };
};

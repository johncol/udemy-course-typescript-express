import 'reflect-metadata';

import { Metadata } from './enums/Metadata';
import { RequestHandlerPropertyDescriptor } from './../../types/request-handler';

export const RequiredFields = (...fields: string[]) => {
  return (target: any, key: string, descriptor: RequestHandlerPropertyDescriptor): void => {
    Reflect.defineMetadata(Metadata.requiredFields, fields, target, key);
  };
};

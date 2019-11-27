import 'reflect-metadata';
import { Method, Metadata } from './enums';

const routeBinder = (method: Method) => {
  return (path: string) => {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
      Reflect.defineMetadata(Metadata.path, path, target, key);
      Reflect.defineMetadata(Metadata.method, method, target, key);
    };
  };
};

export const Get = routeBinder(Method.get);
export const Post = routeBinder(Method.post);
export const Patch = routeBinder(Method.patch);
export const Put = routeBinder(Method.put);
export const Delete = routeBinder(Method.delete);

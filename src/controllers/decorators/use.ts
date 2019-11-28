import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express';
import { Metadata } from './enums/Metadata';

export type Middleware = (request: Request, response: Response, next: NextFunction) => void;

export const Use = (middleware: Middleware) => {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const middlewares: Middleware[] = Reflect.getMetadata(Metadata.middlewares, target, key) || [];
    middlewares.push(middleware);
    Reflect.defineMetadata(Metadata.middlewares, middlewares, target, key);
  };
};

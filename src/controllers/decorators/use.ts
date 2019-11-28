import 'reflect-metadata';
import { RequestHandler } from 'express';
import { Metadata } from './enums/Metadata';
import { RequestHandlerPropertyDescriptor } from './../../types/request-handler';

export type Middleware = RequestHandler;

export const Use = (...newMiddlewares: Middleware[]) => {
  return (target: any, key: string, descriptor: RequestHandlerPropertyDescriptor) => {
    const middlewares: Middleware[] = Reflect.getMetadata(Metadata.middlewares, target, key) || [];
    middlewares.push(...newMiddlewares);
    Reflect.defineMetadata(Metadata.middlewares, middlewares, target, key);
  };
};

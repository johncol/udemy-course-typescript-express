import { RequestHandler } from 'express';

export interface RequestHandlerPropertyDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

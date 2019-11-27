import 'reflect-metadata';
import { Router } from 'express';

export const router = Router();

export const controller = (basePath: string) => {
  return (target: Function): void => {
    for (let key in target.prototype) {
      const path: string = Reflect.getMetadata('path', target.prototype, key);
      if (path) {
        const handler = target.prototype[key];
        router.get(`${basePath}/${path}/`, handler);
      }
    }
  };
};

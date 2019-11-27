import 'reflect-metadata';
import { AppRouter } from './../../AppRouter';

export const controller = (basePath: string) => {
  return (target: Function): void => {
    for (let key in target.prototype) {
      const path: string = Reflect.getMetadata('path', target.prototype, key);
      if (path) {
        const handler = target.prototype[key];
        AppRouter.instance.get(`${basePath}/${path}/`, handler);
      }
    }
  };
};

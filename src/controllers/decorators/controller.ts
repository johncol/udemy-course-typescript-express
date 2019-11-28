import 'reflect-metadata';
import { AppRouter } from './../../AppRouter';
import { Method, Metadata } from './enums';
import { Middleware } from './use';

export const Controller = (basePath: string) => {
  return (target: Function): void => {
    for (let key in target.prototype) {
      const path: string = Reflect.getMetadata(Metadata.path, target.prototype, key);
      if (path != null) {
        const method: Method = Reflect.getMetadata(Metadata.method, target.prototype, key);
        const middlewares: Middleware[] = Reflect.getMetadata(Metadata.middlewares, target.prototype, key) || [];
        const handler = target.prototype[key];
        const route: string = `${basePath}${path}`;
        console.log(`Registering route for ${method.toUpperCase()} ${route} with ${middlewares.length} middlewares`);
        AppRouter.instance[method](route, ...middlewares, handler);
      }
    }
  };
};

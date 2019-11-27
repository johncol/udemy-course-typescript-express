import 'reflect-metadata';
import { AppRouter } from './../../AppRouter';
import { Method, Metadata } from './enums';

export const Controller = (basePath: string) => {
  return (target: Function): void => {
    for (let key in target.prototype) {
      const path: string = Reflect.getMetadata(Metadata.path, target.prototype, key);
      const method: Method = Reflect.getMetadata(Metadata.method, target.prototype, key);
      if (path) {
        const handlerFn = target.prototype[key];
        AppRouter.instance[method](`${basePath}/${path}/`, handlerFn);
      }
    }
  };
};

import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function Use(middleware: RequestHandler) {
  return function (target: any, key: string, propDesc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.Middleware, target, key) || [];
    middlewares.push(middleware);

    Reflect.defineMetadata(MetadataKeys.Middleware, middlewares, target, key);
  };
}

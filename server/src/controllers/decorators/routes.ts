import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (
      target: any,
      key: string,
      propDesc: RouteHandlerDescriptor
    ) {
      Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
    };
  };
}

export const Get = routeBinder(Methods.Get);
export const Put = routeBinder(Methods.Put);
export const Post = routeBinder(Methods.Post);
export const Delete = routeBinder(Methods.Delete);
export const Patch = routeBinder(Methods.Patch);

import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function BodyValidator(...keys: string[]) {
  return function (target: any, key: string, propDesc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.Validator, keys, target, key);
  };
}

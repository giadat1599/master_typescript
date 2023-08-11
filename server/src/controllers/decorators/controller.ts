import { NextFunction, Request, RequestHandler, Response } from 'express';
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';

function bodyValidator(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Invalid request: ${key} is required`);
        return;
      }
    }

    next();
  };
}

export function Controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    // https://stackoverflow.com/questions/67161834/target-prototype-is-an-empty-object-on-class-decorator
    const classProps = Object.getOwnPropertyNames(target.prototype);

    // Remove constructor out of the class properties (class constructors are not enumerable by default)
    classProps.shift();

    for (let key of classProps) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.Path,
        target.prototype,
        key
      );

      const method: Methods = Reflect.getMetadata(
        MetadataKeys.Method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.Validator, target.prototype, key) ||
        [];

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          bodyValidator(requiredBodyProps),
          routeHandler
        );
      }
    }
  };
}

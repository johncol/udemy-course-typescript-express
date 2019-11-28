import { Request, Response, NextFunction } from 'express';

export const LoggerMiddleware = (request: Request, response: Response, next: NextFunction): void => {
  console.log(`${request.method.toUpperCase()} request sent to ${request.path}`);
  next();
  console.log(`${request.method.toUpperCase()} request sent to ${request.path} returned ${response.statusCode}`);
};

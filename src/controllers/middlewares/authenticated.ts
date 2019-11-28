import { Request, Response, NextFunction } from 'express';

export const authenticated = (request: Request, response: Response, next: NextFunction): void => {
  if (request.session && request.session.isLogged) {
    next();
    return;
  }

  response.status(401);
  response.send('Access Denied');
};

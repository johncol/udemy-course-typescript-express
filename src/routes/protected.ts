import { Router, Response, NextFunction } from 'express';
import { RequestWithBody } from './../types/express';

const router = Router();

const withAuthentication = (request: RequestWithBody, response: Response, next: NextFunction): void => {
  if (request.session && request.session.isLogged) {
    next();
    return;
  }

  response.status(401);
  response.send('Access Denied');
};

router.get('/protected', withAuthentication, (request: RequestWithBody, response: Response) => {
  response.send('Protected route accessed successfully');
});

export { router as protectedRouter };

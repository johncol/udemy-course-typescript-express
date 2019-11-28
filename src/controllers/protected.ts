import { Request, Response } from 'express';
import { Controller, Get, Use } from './decorators';
import { authenticated } from './middlewares';

@Controller('/protected')
export class ProtectedController {
  @Get()
  @Use(authenticated)
  getProtected(request: Request, response: Response): void {
    response.send('Protected route accessed successfully');
  }
}

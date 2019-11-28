import { Request, Response } from 'express';
import { Controller, Use, Get } from './decorators';
import { LoggerMiddleware } from './middlewares';

@Controller('/')
export class RootController {
  @Get()
  @Use(LoggerMiddleware)
  getRoot(request: Request, response: Response): void {
    if (request.session && request.session.isLogged) {
      response.send(`
        <div>
          <h1>Welcome ${request.session.email}</h1>
          <a href="/logout">Logout</a>
        </div>
      `);
    } else {
      response.send(`
        <div>
          <h1>Welcome visitor</h1>
          <a href="/login">Login</a>
        </div>
      `);
    }
  }
}

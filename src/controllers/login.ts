import { Request, Response } from 'express';
import { Controller, Get } from './decorators';

@Controller('/')
export class LoginController {
  @Get('/login')
  getLogin(request: Request, response: Response): void {
    response.send(`
      <form method="POST">
        <div>
          <label for="email">Email</label>
          <input type="text" name="email" id="email" placeholder="example@domain.com" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" />
      </form>
    `);
  }
}

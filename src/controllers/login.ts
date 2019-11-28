import { Request, Response } from 'express';
import { Controller, Use, Get, Post, RequiredFields } from './decorators';
import { LoggerMiddleware } from './middlewares';
import { credentialsCorrect } from './../login';

@Controller('/')
export class LoginController {
  @Get('login')
  @Use(LoggerMiddleware)
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

  @Post('login')
  @Use(LoggerMiddleware)
  @RequiredFields('email', 'password')
  postLogin(request: Request, response: Response): void {
    const { email, password } = request.body;
    if (credentialsCorrect(email, password)) {
      request.session = { isLogged: true, email };
      response.redirect('/');
    } else {
      response.status(401);
      response.send('Invalid email or username');
    }
  }

  @Get('logout')
  @Use(LoggerMiddleware)
  getLogout(request: Request, response: Response) {
    request.session = { isLogged: false };
    response.redirect('/');
  }
}

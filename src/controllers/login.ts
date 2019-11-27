import { Request, Response } from 'express';
import { Controller, Get, Post } from './decorators';
import { credentialsCorrect } from '../login';

@Controller('/')
export class LoginController {
  @Get()
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

  @Get('login')
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
  postLogin(request: Request, response: Response): void {
    const { email = '', password = '' } = request.body;
    if (email.length === 0 || password.length === 0) {
      response.status(403);
      response.send('Invalid request');
    }

    if (credentialsCorrect(email, password)) {
      request.session = { isLogged: true, email };
      response.redirect('/');
    } else {
      response.status(401);
      response.send('Invalid email or username');
    }
  }

  @Get('logout')
  getLogout(request: Request, response: Response) {
    request.session = { isLogged: false };
    response.redirect('/');
  }
}

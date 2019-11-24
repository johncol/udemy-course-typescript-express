import { Router, Request, Response } from 'express';
import { RequestWithBody } from './types/express';
import { credentialsCorrect } from './../login';

const router = Router();

router.get('/login', (request: Request, response: Response) => {
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
});

router.post('/login', (request: RequestWithBody, response: Response) => {
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
});

export { router };

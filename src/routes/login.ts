import { Router, Request, Response } from 'express';
import { RequestWithBody } from './types/express';

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
  const { email, password } = request.body;
  response.send(`Email was ${email} and password was ${password}`);
});

export { router };

import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (request: Request, response: Response) => {
  response.send(`
    <form method="POST">
      <div>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <input type="submit" />
    </form>
  `);
});

router.post('/login', (request: Request, response: Response) => {
  const { email, password } = request.body;
  response.send(`Email was ${email} and password was ${password}`);
});

export { router };

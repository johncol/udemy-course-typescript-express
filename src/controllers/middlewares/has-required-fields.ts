import { Request, Response, NextFunction } from 'express';

export const hasRequiredFields = (fields: string[]) => {
  return (request: Request, response: Response, next: NextFunction): void => {
    for (let field of fields) {
      const value: string = request.body[field];
      if (!value || value.trim().length === 0) {
        response.status(403);
        response.send(`Invalid request: missing "${field}" property`);
        return;
      }
    }

    next();
  };
};

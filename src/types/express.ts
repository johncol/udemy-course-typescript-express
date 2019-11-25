import { Request as ExpressRequest } from 'express';

export interface RequestWithBody extends ExpressRequest {
  body: { [key: string]: string | undefined };
}

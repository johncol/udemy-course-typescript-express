import { Request as ExpressRequest } from 'express';

// Not used anymore
export interface RequestWithBody extends ExpressRequest {
  body: { [key: string]: string | undefined };
}

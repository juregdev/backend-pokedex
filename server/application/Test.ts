import { Request, Response } from 'express';
import { injectable } from 'inversify';

import ITest from './ITest';

@injectable()
export default class Test implements ITest {
  async test(req: Request, res: Response): Promise<Response> {
    return res.send('hello tes Word');
  }
}

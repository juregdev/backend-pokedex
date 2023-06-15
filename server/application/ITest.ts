import { Request, Response } from "express";

export default abstract class ITest {
  abstract test(req: Request, res: Response): Promise<Response>;
}

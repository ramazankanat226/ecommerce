import { Request, Response } from 'express';
export declare const authController: {
    register(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(req: Request, res: Response): Promise<void>;
    getProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=auth.controller.d.ts.map
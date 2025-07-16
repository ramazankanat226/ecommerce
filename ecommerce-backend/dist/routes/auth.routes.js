"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("@/controllers/auth.controller");
const authRouter = (0, express_1.Router)();
authRouter.post('/register', auth_controller_1.authController.register);
authRouter.post('/login', auth_controller_1.authController.login);
authRouter.post('/logout', auth_controller_1.authController.logout);
authRouter.get('/profile', auth_controller_1.authController.getProfile);
exports.default = authRouter;
//# sourceMappingURL=auth.routes.js.map
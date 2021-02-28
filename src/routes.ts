import { Router } from 'express';
import { SurveysController } from './controllers/surveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveyscontroller = new SurveysController();

router.post("/users", userController.create);
router.post("/surveys", surveyscontroller.create);
router.get("/surveys", surveyscontroller.show);

export { router };
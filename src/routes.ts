import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateBancoController } from "./controllers/CreateBancoController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListBancosController } from "./controllers/ListBancosController";

import { CreateEmpresaController } from "./controllers/CreateEmpresaController";


const router = Router();

//const createBancoService = new CreateBancoController();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createBancoController = new CreateBancoController();
const listUsersController = new ListUsersController();
const listBancosController = new ListBancosController();

const createEmpresaController = new CreateEmpresaController();


//router.post("/bancos", CreateBancoController.handle)

/*

router.post(
  "/post",
  ensureAuthenticated,
  ensureAdmin,
  CreateBancoController.handle
);

*/
router.post("/bancos", createBancoController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

router.get("/users", ensureAuthenticated, listUsersController.handle);
router.get("/bancos", ensureAuthenticated, listBancosController.handle);

/*router.get("/empresas", ensureAuthenticated, listEmpresaController.handle);
*/

router.post("/empresas", createEmpresaController.handle);

export { router };

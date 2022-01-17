import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateBancoController } from "./controllers/CreateBancoController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListBancosController } from "./controllers/ListBancosController";

import { CreateEmpresaController } from "./controllers/CreateEmpresaController";

import {ListEmpresasController} from "./controllers/ListEmpresasController"
import { DeleteBancoController } from "./controllers/DeleteBancoController";
import { UpdateBancoController } from "./controllers/UpdateBancoController";


const router = Router();

//const createBancoService = new CreateBancoController();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createBancoController = new CreateBancoController();
const listUsersController = new ListUsersController();
const listBancosController = new ListBancosController();

const createEmpresaController = new CreateEmpresaController();
const listEmpresaController = new ListEmpresasController();
const updateBancoController = new UpdateBancoController();

const deleteBancoController = new DeleteBancoController();


//router.post("/bancos", CreateBancoController.handle)

/*

router.post(
  "/post",
  ensureAuthenticated,
  ensureAdmin,
  CreateBancoController.handle
);

*/



router.get("/bancos", ensureAuthenticated,ensureAdmin, listBancosController.handle);
router.post("/bancos", ensureAuthenticated,ensureAdmin,createBancoController.handle);
router.put("/bancos/:id", ensureAuthenticated,ensureAdmin,  updateBancoController.handle);
router.delete("/bancos/:id", ensureAuthenticated,ensureAdmin,  deleteBancoController.handle);



router.get("/empresas",  ensureAuthenticated, ensureAdmin,listEmpresaController.handle);
router.post("/empresas", ensureAdmin, ensureAuthenticated, createEmpresaController.handle);





router.post("/login",  authenticateUserController.handle);

 
router.post("/users", ensureAuthenticated,  ensureAdmin, createUserController.handle);
router.get("/users",  ensureAuthenticated,  listUsersController.handle);





export { router };

import { CreateEmpresaController } from "@controllers/CreateEmpresaController"
import { Router } from "express";

import { ensureAdmin } from "@middlewares/ensureAdmin"
import { CreateUserController } from "@controllers/CreateUserController"
 
import { AuthenticateUserController } from "@controllers/AuthenticateUserController"

import { ensureAuthenticated } from "@middlewares/ensureAuthenticated"
import { CreateBancoController } from "@controllers/CreateBancoController"
import { ListUsersController } from "@controllers/ListUsersController"
 





import {ListEmpresasController} from "@controllers/ListEmpresasController"

import { DeleteBancoController } from "@controllers/DeleteBancoController";
import { UpdateBancoController } from "@controllers/UpdateBancoController";

import { ListBancosController, FindBancoController, FindBancobyNameController } 
from "@controllers/ListBancosController";
//import { FindBancobyNameController } from "./controllers/ListBancosController";



const router = Router();

//const createBancoService = new CreateBancoController();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createBancoController = new CreateBancoController();
const listUsersController = new ListUsersController();
const listBancosController = new ListBancosController();
const findBancosbyIDController = new FindBancoController();
const findBancosbyNameController = new FindBancobyNameController();


const createEmpresaController = new CreateEmpresaController();
const listEmpresaController = new ListEmpresasController();
const updateBancoController = new UpdateBancoController();

const deleteBancoController = new DeleteBancoController();


//router.post("/bancos", CreateBancoController.handle)



router.get("/bancos", ensureAuthenticated,ensureAdmin, listBancosController.handle);
router.post("/bancos", ensureAuthenticated, ensureAdmin,createBancoController.handle);

//router.post("/bancos", ensureAuthenticated,ensureAdmin,createBancoController.handle);

router.get("/bancos/id/:id", ensureAuthenticated, ensureAdmin,findBancosbyIDController.handle);
router.get("/bancos/name/:id", ensureAuthenticated, ensureAdmin,findBancosbyNameController.handle);

router.put("/bancos/:id",  ensureAuthenticated, ensureAdmin, updateBancoController.handle);
router.delete("/bancos/:id", ensureAuthenticated, ensureAdmin,  deleteBancoController.handle);



router.get("/empresas",  ensureAuthenticated, ensureAdmin,listEmpresaController.handle);
router.post("/empresas", ensureAuthenticated, ensureAdmin, createEmpresaController.handle);




router.post("/login",  authenticateUserController.handle);

 
router.post("/users", ensureAuthenticated, ensureAdmin,   createUserController.handle);
router.get("/users",  ensureAuthenticated, ensureAdmin,  listUsersController.handle);





export { router };

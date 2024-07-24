"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheeseRouter = void 0;
const express_1 = require("express");
const dependencies_1 = require("./dependencies");
exports.CheeseRouter = (0, express_1.Router)();
exports.CheeseRouter.get("/:id", dependencies_1.GetByUserController.run.bind(dependencies_1.GetByUserController));
exports.CheeseRouter.get("/id/:id", dependencies_1.GetByIdController.run.bind(dependencies_1.GetByIdController));
exports.CheeseRouter.post("/", dependencies_1.CreateController.run.bind(dependencies_1.CreateController));
exports.CheeseRouter.put("/:id", dependencies_1.UpdateController.run.bind(dependencies_1.UpdateController));
exports.CheeseRouter.put("/state/:id", dependencies_1.UpdateStateController.run.bind(dependencies_1.UpdateStateController));
exports.CheeseRouter.delete("/:id", dependencies_1.DeleteByIdController.run.bind(dependencies_1.DeleteByIdController));

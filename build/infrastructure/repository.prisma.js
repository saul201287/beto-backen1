"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheeseRepositoryPrisma = void 0;
const client_1 = require("@prisma/client");
const cheese_1 = require("../domain/cheese");
class CheeseRepositoryPrisma {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    getByUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.cheese.findMany();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundCheese = yield this.prisma.cheese.findUnique({
                where: { id },
            });
            if (!foundCheese) {
                throw new Error(`Cheese with ID ${id} not found`);
            }
            return new cheese_1.Cheese(foundCheese.id, foundCheese.batch, foundCheese.quantity, foundCheese.state, foundCheese.startDate, foundCheese.endDate, foundCheese.userId);
        });
    }
    create(cheese) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdCheese = yield this.prisma.cheese.create({
                data: {
                    batch: cheese.batch,
                    quantity: cheese.quantity,
                    state: cheese.state,
                    startDate: cheese.startDate,
                    endDate: cheese.endDate,
                    userId: cheese.userId,
                },
            });
            return new cheese_1.Cheese(createdCheese.id, createdCheese.batch, createdCheese.quantity, createdCheese.state, createdCheese.startDate, createdCheese.endDate, createdCheese.userId);
        });
    }
    update(cheese) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCheese = yield this.prisma.cheese.update({
                where: { id: cheese.id },
                data: {
                    batch: cheese.batch,
                    quantity: cheese.quantity,
                    state: cheese.state,
                    startDate: cheese.startDate,
                    endDate: cheese.endDate,
                    userId: cheese.userId,
                },
            });
            return new cheese_1.Cheese(updatedCheese.id, updatedCheese.batch, updatedCheese.quantity, updatedCheese.state, updatedCheese.startDate, updatedCheese.endDate, updatedCheese.userId);
        });
    }
    updateState(id, state) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id, state);
            const updatedCheese = yield this.prisma.cheese.update({
                where: { id },
                data: {
                    state: state,
                },
            });
            return new cheese_1.Cheese(updatedCheese.id, updatedCheese.batch, updatedCheese.quantity, updatedCheese.state, updatedCheese.startDate, updatedCheese.endDate, updatedCheese.userId);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.cheese.delete({
                where: { id },
            });
        });
    }
}
exports.CheeseRepositoryPrisma = CheeseRepositoryPrisma;

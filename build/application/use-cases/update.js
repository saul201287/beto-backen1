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
exports.update = void 0;
const cheese_1 = require("../../domain/cheese");
class update {
    constructor(cheeseRepository) {
        this.cheeseRepository = cheeseRepository;
    }
    run(id, batch, quantity, state, startDate, endDate, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCheese = new cheese_1.Cheese(id, batch, quantity, state, startDate, endDate, userId);
            return this.cheeseRepository.update(updatedCheese);
        });
    }
}
exports.update = update;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cheese = void 0;
class Cheese {
    constructor(id, batch, quantity, state, startDate, endDate, userId) {
        this.id = id;
        this.batch = batch;
        this.quantity = quantity;
        this.state = state;
        this.startDate = startDate;
        this.endDate = endDate;
        this.userId = userId;
    }
}
exports.Cheese = Cheese;

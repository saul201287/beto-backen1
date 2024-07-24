"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = __importDefault(require("signale"));
const Routes_1 = require("./infrastructure/Routes");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
const port = process.env.PORT || 3001;
const app = (0, express_1.default)();
dotenv_1.default.config();
app.disable("x-powered-by");
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "PREFLIGHT"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use('/cheese', Routes_1.CheeseRouter);
const options = {
    key: fs_1.default.readFileSync(String(process.env.SSL_KEY)),
    cert: fs_1.default.readFileSync(String(process.env.SSL_CERT))
};
https_1.default.createServer(options, app).listen(port, () => {
    signale_1.default.success(`HTTPS Server running on port ${port}`);
});

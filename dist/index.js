"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORTt = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Express!");
});
// const PORT = 3000;
app.listen(PORTt, () => {
    console.log(`Server running on port ${PORTt}`);
});

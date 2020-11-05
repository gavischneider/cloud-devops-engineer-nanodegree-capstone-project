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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const randomSong = require("@chatandshare/random-song");
require("dotenv").config();
const app = express_1.default();
const random = new randomSong(process.env.API_KEY);
// Home route
app.get("/", (req, res) => {
    res.send("Welcome to my capstone project! To get a random song, go to the '/random' route.");
});
// Random song route
app.get("/random", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const song = yield random.song();
        console.log(song);
        res.send(song);
    }
    catch (error) {
        console.log(error);
    }
}));
app.listen(8080, () => console.log("Server running on port 8080"));

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
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("url: ", process.env.DB_URL);
    const DB_URL = "mongodb+srv://admin:siDaOF4kJ6W6ivqt@project-free-cluster.eb0vzyb.mongodb.net/house-product?retryWrites=true&w=majority";
    console.log("inside the DB connect");
    try {
        mongoose_1.default.set("strictQuery", false);
        yield mongoose_1.default.connect(DB_URL, {
            autoIndex: true,
        });
        console.log("Db Connected");
    }
    catch (error) {
        console.log("=========Error ============");
        console.log(error);
        process.exit(1);
    }
});

import express, { Application, NextFunction, Request, Response }  from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());


app.use(function(err:any, _req:Request, res:Response, next:NextFunction) {
    res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;
import express from "express"
import { createOrder, varifyPayment } from "../controller/orderController.js"

let paymentRouter = express.Router()

paymentRouter.post("/create-order",createOrder);
paymentRouter.post("/verify-payment", varifyPayment);

export default paymentRouter

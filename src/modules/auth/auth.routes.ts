import express from "express";

const app = express()

const router = express.Router();

router.post('/login', (req, res) => {
    const user = req.body;
    res.status(200).json({
        message: "login successfully",
        data: user
    })
})

router.post('/signup', (req, res) => {
    const user = req.body;
    res.status(200).json({
        message: "signup successfully",
        data: user
    })
})

router.post('/forgot-password', (req, res) => {
    const user = req.body;
    res.status(200).json({
        message: "signup successfully",
        data: user
    })
})

router.post('/password-reset', (req, res) => {
    const user = req.body;
    res.status(200).json({
        message: "signup successfully",
        data: user
    })
})

export default router;
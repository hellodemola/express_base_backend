import express from 'express'
import UserRouter from '../modules/users/users.routes.js'
const router = express.Router();

router.get('/', (req, res) => res.send('hello world') )

router.use('/users', UserRouter)

export default router;
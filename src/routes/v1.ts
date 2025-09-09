import express from 'express'
import UserRouter from '../modules/users/users.routes'
import AuthRouter from '../modules/auth/auth.routes'
const router = express.Router();

router.get('/', (req, res) => res.send('hello world') )

router.use('/users', UserRouter)
router.use('/auth', AuthRouter)
export default router;
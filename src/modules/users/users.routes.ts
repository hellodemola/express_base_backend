import express from "express";

const app = express();
const router = express.Router();

router.get('/', (req, res) => res.json({ 
    names: ['Ademola', 'Blessing', 'Ethan', 'Eliana']
 }))

router.get('/:user', (req, res) => {
    const user = req.params.user;
    res.json(user)
})

router.post('/:user', (req, res) => {
    const user = req.body;
    res.json(user)
})

export default router;

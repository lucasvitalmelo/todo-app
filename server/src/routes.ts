import { Router } from 'express';

const routes = Router();

const lista:Object[] = []

routes.post("/", (req, res) => {  	
  lista.push({
    ...req.body,
    isCompleted: false 
  })
  res.json(lista)
})
export default routes

import {Router} from 'express'
import {getEmployees, getEmployee, createEmployees, updateEmployees, updateEmployee ,deleteEmployees} from '../controllers/employees.controller.js'
const router = Router()

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees)

router.put('/employees/:id', updateEmployees)

router.patch('/employees/:id', updateEmployee)

router.delete('/employees/:id', deleteEmployees)

export default router
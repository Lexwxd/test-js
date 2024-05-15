import express from "express";
import { asyncHandler, requireToken } from "../middleware/middleware.js";
import { ToDoService } from "../services/service.js";
import Joi from "joi";
export const todoRouter = express.Router()

const schema = Joi.object({
    name: Joi.string().alphanum().min(2).max(30).required(),
    description: Joi.string().min(2).max(250).required(),
    is_completed: Joi.bool().optional()
});

todoRouter.get('/:id', requireToken, asyncHandler(async (request, result) => {
    const res = await ToDoService.read(request.params.id)
    result.status(200).json({ data: res })
}))

todoRouter.get('/', asyncHandler(async (request, result) => {
    const res = await ToDoService.readAll()
    result.status(200).json({ data: res })
}))

todoRouter.post('/', asyncHandler(async (request, result) => {
    const asd = schema.validate(request.body);
    console.log(asd);
    if (asd.error) {
        return result.status(400).json({ error: asd.error.details[0].message });
    } else {
        await ToDoService.create(request.body)
        result.status(200).json({ ok: 'ok' })
    }
}))

todoRouter.patch('/', async (request, result) => {
    res.send('Birds home page')
})

todoRouter.delete('/:id', asyncHandler(async (request, result) => {
    const res = await ToDoService.delete(request.params.id)
    result.status(200).json({ ok: 'ok' })
}))

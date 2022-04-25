import { Request, Response } from "express";
import crypto from "crypto";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

const list: Task[] = [];

const getAll = (req: Request, res: Response) => res.json(list);

const getById = (req: Request, res: Response) => {
  const task = list.find((item) => item.id === req.params.id);

  if (!task) {
    return res.status(400).json({ error: "Not found task" });
  }
  return res.json(task);
};

const save = (req: Request, res: Response) => {
  if (!req.body.title) {
    return res.status(400).json({ error: "Not found keys" });
  }

  const task = {
    id: crypto.randomUUID(),
    title: req.body.title,
    done: false,
  };
  list.push(task);
  return res.status(201).json(task);
};

const remove = (req: Request, res: Response) => {
  const taskIndex = list.findIndex((item) => item.id === req.params.id);

  if (taskIndex === -1) {
    return res.status(400).json({ error: "Task not found" });
  }
  const oldTask = list[taskIndex];

  list.splice(taskIndex, 1);

  return res.json(oldTask);
};

const update = (req: Request, res: Response) => {
  const taskIndex = list.findIndex((item) => item.id === req.params.id);

  if (taskIndex === -1) {
    return res.status(400).json({ error: "Task not found" });
  }

  const newData = {
    ...(req.body.title && { title: req.body.title }),
    ...(req.body.done && { done: req.body.done }),
  };
  const task = { ...list[taskIndex], ...newData };

  list[taskIndex] = task;

  return res.json(task);
};

export default { save, getAll, update, remove, getById };

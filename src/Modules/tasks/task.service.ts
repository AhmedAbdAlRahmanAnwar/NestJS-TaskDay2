import { Injectable, NotFoundException } from '@nestjs/common';
import { StatusService } from '../status/status.service';
import { tasks } from '../../../data.json';

@Injectable()
export class TaskService {
  constructor(private readonly statusService: StatusService) {}
  getAllTasks() {
    return tasks;
  }
  getUserTasks(id: number) {
    return tasks.filter((task) => task.userId === id);
  }

  addTask(task: { title: string; userId: number; statusId: number }) {
    tasks.push({
      id: Math.random() * 100,
      title: task.title,
      userId: task.userId,
      statusId: task.statusId,
    });
    return tasks;
  }

  updateTask(id: number, title: string, statusId: number) {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException('Task Not Found');
    }
    tasks[taskIndex].title = title;
    tasks[taskIndex].statusId = statusId;
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title,
      statusId,
    };
    return tasks;
  }
  deleteTask(id: number) {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException('Task Not Found');
    }
    tasks.splice(taskIndex, 1);
    return tasks;
  }
}

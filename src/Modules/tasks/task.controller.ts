import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }
  @Get(':id')
  getUserTasks(@Param('id', ParseIntPipe) userId: number) {
    return this.taskService.getUserTasks(userId);
  }
  @Post()
  addTask(@Body() task: { title: string; userId: number; statusId: number }) {
    return this.taskService.addTask(task);
  }

  @Put(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() title: string,
    @Body() statusId: number,
  ) {
    return this.taskService.updateTask(id, title, statusId);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.deleteTask(id);
  }
}

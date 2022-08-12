import { Injectable, NotFoundException } from '@nestjs/common';
import { users } from '../../../data.json';
import { TaskService } from '../tasks/task.service';

@Injectable()
export class UserService {
  constructor(private readonly taskService: TaskService) {}

  getAllUsers() {
    return users;
  }

  getUserById(id: number) {
    const user = users.filter((user) => user.id === id);
    if (user.length === 0) {
      throw new NotFoundException('User Not Found');
    }
    const userTasks = this.taskService.getUserTasks(id);
    return { user, userTasks };
  }
  addUser(username: string, password: string) {
    users.push({
      id: Math.random() * 100,
      username: username,
      password: password,
    });
    return users;
  }
  updateUser(id: number, user: { username: string; password: string }) {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User Not Found');
    }
    users[userIndex].username = user.username;
    users[userIndex].password = user.password;
    return users;
  }
  deleteUser(id: number) {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User Not Found');
    }
    users.splice(userIndex, 1);
    return users;
  }
}

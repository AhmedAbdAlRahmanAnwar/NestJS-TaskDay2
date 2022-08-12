import { Module } from '@nestjs/common';
import { TaskModule } from '../tasks/task.module';
import { StatusService } from '../status/status.service';
import { UserService } from './user.service';
import { TaskService } from '../tasks/task.service';
import { UserController } from './user.controller';

@Module({
  imports: [TaskModule],
  controllers: [UserController],
  providers: [UserService, TaskService, StatusService],
})
export class UserModule {}

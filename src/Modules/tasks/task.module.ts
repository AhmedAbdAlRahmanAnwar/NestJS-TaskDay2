import { Module } from '@nestjs/common';
import { StatusService } from '../status/status.service';
import { StatusModule } from '../status/status.module';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [StatusModule],
  controllers: [TaskController],
  providers: [TaskService, StatusService],
})
export class TaskModule {}

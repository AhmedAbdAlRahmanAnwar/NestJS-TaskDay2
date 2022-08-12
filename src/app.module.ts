import { Module } from '@nestjs/common';
import { UserModule } from './Modules/user/user.module';
import { StatusModule } from './Modules/status/status.module';
import { TaskModule } from './Modules/tasks/task.module';

@Module({
  imports: [UserModule, TaskModule, StatusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}
  @Get()
  getAllStatus() {
    return this.statusService.getAllStatus();
  }
  @Get(':id')
  getStatusById(@Param('id', ParseIntPipe) id: number) {
    return this.statusService.getStatusById(id);
  }
}

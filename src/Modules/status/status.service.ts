import { Injectable } from '@nestjs/common';
import { status } from '../../../data.json';

@Injectable()
export class StatusService {
  getAllStatus() {
    return status;
  }
  getStatusById(id: number) {
    return status.filter((status) => status.id === id);
  }
}

import { Controller, Get } from '@nestjs/common';
import { JobService } from '../service/job.service';

@Controller('/job')
export class JobController {
  constructor(private job: JobService) {}

  @Get('/get-job')
  getJob() {
    return this.job.getJob();
  }
}

import { Module } from '@nestjs/common';
import { JobService } from './service/job.service';
import { JobController } from './controller/job.controller';

@Module({
  controllers: [JobController],
  providers: [JobService],
  exports: [JobService],
})
export class jobModule {}

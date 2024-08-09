import { Module } from '@nestjs/common';
import { jobModule } from './Jobs/jobs.module';

@Module({
  imports: [jobModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

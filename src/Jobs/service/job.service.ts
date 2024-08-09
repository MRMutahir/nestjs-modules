import { Injectable } from '@nestjs/common';

@Injectable()
export class JobService {
  constructor() {
    console.log('Job service Constructor is runing');
  }

  getJob() {
    return {
      message: 'SALAM this Service job and Controller`',
    };
  }
}

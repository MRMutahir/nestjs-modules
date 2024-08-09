import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private store = `SALAM Muhammad Mutahir`;
  getuser() {
    // console.log('this.store ', this.store);
    return {
      message: `${this.store}`,
    };
  }
}

import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {
    console.log('constructor(private usersService: UsersService)')
  }

  @Get()
  getUser() {
    return {
      message: this.usersService.getuser(),
    };
  }
}

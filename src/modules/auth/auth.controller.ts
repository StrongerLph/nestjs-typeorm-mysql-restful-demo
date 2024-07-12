import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Result } from '../../utils/result/index';

@Controller('/auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/menus')
  async getAll(): Promise<Result> {
    return Result.ok([
      {
        name: 'UserCenter',
        path: '/usercenter',
        icon: '',
        parentId: '',
        orderNo: 1,
        componentPath: '/home/index.vue',
        hidden: false,
      },
    ]);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthUseCase {
  public googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User info from google',
      user: req.user,
    };
  }
}

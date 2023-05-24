import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { GoogleOAuthGuard } from 'src/modules/auth/google-oauth.guard';
import { AuthUseCase } from 'src/modules/auth/auth.use-case';

@Controller('auth')
export class AuthController {
  constructor(private readonly authUseCase: AuthUseCase) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async googleAuth(@Request() req) {}

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  public googleAuthRedirect(@Request() req) {
    return this.authUseCase.googleLogin(req);
  }
}

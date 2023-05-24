import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback, Profile } from 'passport-google-oauth20';

interface ValidationInput {
  accessToken: string;
  refreshToken: string;
  profile: Profile;
  done: VerifyCallback;
}

interface User {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackUrl: 'http://localhost:3003/auth/google-redirect',
      scope: ['email', 'profile'],
    });
  }

  public async validate({
    accessToken,
    refreshToken,
    profile,
    done,
  }: ValidationInput): Promise<void> {
    const { name, emails, photos } = profile;
    const user: User = {
      accessToken,
      refreshToken,
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
    };
    done(null, user);
  }
}

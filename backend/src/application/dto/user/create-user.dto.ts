export class CreateUserDto {
  id!: string;
  email!: string;
  localId!: string;
  displayName!: string;
  lastLoginAt!: string;
  lastRefreshAt!: string;
  preferedLanguage!: string;
  preferedUnit!: string;
}

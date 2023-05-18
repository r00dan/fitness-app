import { Column, Entity, PrimaryColumn } from 'typeorm';

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('user')
export class User {
  @PrimaryColumn()
  public id!: string;

  @Column()
  public role!: UserRole;

  @Column()
  public email!: string;

  @Column()
  public username!: string;

  @Column()
  public firstName!: string;

  @Column()
  public lastName!: string;

  @Column()
  public secureCode!: string;

  @Column()
  public token!: string;
}

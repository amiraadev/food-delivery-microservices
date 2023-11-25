/* eslint-disable prettier/prettier */
import { ObjectType, Field, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields:"id")')
export class Avatars {
  @Field()
  id: string;
  @Field()
  public_id: string;
  @Field()
  url: string;
  @Field()
  user_id: string;
}
export class User {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  avatar?: Avatars | null;
  @Field()
  role: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt?: Date;
}

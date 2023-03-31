import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.com", description: "email" })
  readonly email: string;

  @ApiProperty({ example: "user@mail.com", description: "email" })
  readonly password: string;
}

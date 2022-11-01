import { ApiProperty } from '@nestjs/swagger';

export class CreateCasemanagerDto {
  @ApiProperty()
  userName: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;
}

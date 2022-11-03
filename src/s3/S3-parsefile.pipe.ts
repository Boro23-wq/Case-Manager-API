import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class S3ParseFile implements PipeTransform {
  transform(
    file: Express.Multer.File,
    metadata: ArgumentMetadata,
  ): Express.Multer.File {
    if (file === undefined || file === null) {
      throw new BadRequestException('Validation failed (file expected).');
    }

    return file;
  }
}

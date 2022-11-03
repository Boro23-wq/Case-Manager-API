import { UnsupportedMediaTypeException } from '@nestjs/common';

export function S3MimetypeFilter(...mimetypes: string[]) {
  return (
    req,
    file: Express.Multer.File,
    callback: (error: Error | null, acceptFile: boolean) => void,
  ) => {
    if (mimetypes.some((m) => file.mimetype.includes(m))) {
      callback(null, true);
    } else {
      callback(
        new UnsupportedMediaTypeException(`Please upload an image file type.`),
        false,
      );
    }
  };
}

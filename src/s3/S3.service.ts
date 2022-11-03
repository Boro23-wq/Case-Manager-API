import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class S3Service {
  AWS_S3_BUCKET = process.env.AWS_BUCKET_NAME;

  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  async uploadFile(file) {
    const { originalname } = file;
    const { buffer } = file;
    const { mimetype } = file;

    return await this.s3_upload(
      buffer,
      this.AWS_S3_BUCKET,
      originalname,
      mimetype,
    );
  }

  async s3_upload(file, bucket, name, mimetype) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: 'public-read',
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: process.env.AWS_REGION_NAME,
      },
    };

    try {
      const s3Response = await this.s3.upload(params).promise();
      return s3Response;
    } catch (e) {
      console.log(e);
    }
  }
}

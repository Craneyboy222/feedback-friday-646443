import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

// File upload service with S3 support
const s3 = new AWS.S3();

export class FileService {
  static async uploadFile(file: any) {
    try {
      const uploadParams = {
        Bucket: 'your-bucket-name',
        Key: `${uuidv4()}_${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
      const data = await s3.upload(uploadParams).promise();
      return data.Location;
    } catch (error) {
      console.error('Error uploading file', error);
      throw new Error('File upload failed');
    }
  }
}
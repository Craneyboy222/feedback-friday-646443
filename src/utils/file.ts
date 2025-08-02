import AWS from 'aws-sdk';
import fs from 'fs';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const uploadFile = async (filePath, bucketName) => {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName,
    Key: filePath,
    Body: fileContent
  };

  return await s3.upload(params).promise();
};

export const getFile = async (fileKey, bucketName) => {
  const params = {
    Bucket: bucketName,
    Key: fileKey
  };

  return await s3.getObject(params).promise();
};
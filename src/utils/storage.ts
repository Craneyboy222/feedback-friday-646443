import AWS from 'aws-sdk';

const s3 = new AWS.S3();

export const uploadFile = async (bucket: string, key: string, body: Buffer) => {
  try {
    const params = { Bucket: bucket, Key: key, Body: body };
    await s3.upload(params).promise();
    console.log('File uploaded successfully');
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('File upload failed');
  }
};

export const getFile = async (bucket: string, key: string) => {
  try {
    const params = { Bucket: bucket, Key: key };
    const data = await s3.getObject(params).promise();
    return data.Body;
  } catch (error) {
    console.error('Error getting file:', error);
    throw new Error('File retrieval failed');
  }
};
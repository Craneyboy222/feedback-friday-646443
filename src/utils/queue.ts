import { Queue, Worker } from 'bull';

const feedbackQueue = new Queue('feedback-processing');

export const addToQueue = async (data: any) => {
  try {
    await feedbackQueue.add(data);
  } catch (error) {
    console.error('Error adding to queue:', error);
    throw new Error('Queue add operation failed');
  }
};

export const processQueue = () => {
  const worker = new Worker('feedback-processing', async job => {
    try {
      // Process job data
      console.log('Processing job:', job.data);
    } catch (error) {
      console.error('Error processing queue:', error);
    }
  });

  worker.on('failed', (job, error) => {
    console.error(`Job failed: ${job.id}`, error);
  });
};
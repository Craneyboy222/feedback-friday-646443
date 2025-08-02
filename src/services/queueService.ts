import { Queue, Worker } from 'bullmq';

// Queue service with job processing
const myQueue = new Queue('myQueue');

export class QueueService {
  static async addJob(data: any) {
    try {
      await myQueue.add('myJob', data);
    } catch (error) {
      console.error('Error adding job to queue', error);
      throw new Error('Failed to add job');
    }
  }

  static processJobs() {
    const worker = new Worker('myQueue', async job => {
      try {
        console.log('Processing job', job.id);
        // Process the job here
      } catch (error) {
        console.error('Job processing failed', error);
      }
    });
  }
}
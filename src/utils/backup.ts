import { exec } from 'child_process';
import { logError } from './logger';

export const backupDatabase = () => {
  const backupCommand = `pg_dump ${process.env.DATABASE_URL} > backup.sql`;
  exec(backupCommand, (error, stdout, stderr) => {
    if (error) {
      logError('Error during database backup', error);
      return;
    }
    console.log('Database backup completed successfully.');
  });
};
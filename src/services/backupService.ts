const { exec } = require('child_process');

export class BackupService {
  static async backupDatabase() {
    const dumpCommand = 'pg_dump dbname=mydatabase -f ./backup.sql';
    try {
      exec(dumpCommand, (error, stdout, stderr) => {
        if (error) {
          console.error('Backup error:', error);
          return;
        }
        console.log('Backup successful:', stdout);
      });
    } catch (err) {
      console.error('Backup service error:', err);
      throw err;
    }
  }
}rror('Failed to perform backup');
    }
  }
}
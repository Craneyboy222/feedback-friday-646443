/* Migration configuration */
import { exec } from 'child_process';

const runMigrations = () => {
  exec('npx sequelize-cli db:migrate', (err, stdout, stderr) => {
    if (err) {
      console.error(`Migration error: ${stderr}`);
      return;
    }
    console.log(`Migration output: ${stdout}`);
  });
};

export default runMigrations;
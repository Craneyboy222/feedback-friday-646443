/* Seeding configuration */
import { exec } from 'child_process';

const runSeeding = () => {
  exec('npx sequelize-cli db:seed:all', (err, stdout, stderr) => {
    if (err) {
      console.error(`Seeding error: ${stderr}`);
      return;
    }
    console.log(`Seeding output: ${stdout}`);
  });
};

export default runSeeding;
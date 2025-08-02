import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10);

  const user = await prisma.user.create({
    data: {
      username: 'testuser',
      email: 'testuser@example.com',
      password_hash: passwordHash,
      profile_info: 'Lorem ipsum dolor sit amet'
    }
  });

  const feedbackThread = await prisma.feedbackThread.create({
    data: {
      user_id: user.id,
      company_name: 'Test Company',
      url: 'https://example.com',
      purpose: 'Testing feedback',
      technologies: 'React,Node.js',
      feedback_requested: true,
      seeking_beta_testers: false,
      additional_comments: 'Looking forward to your feedback!',
      created_at: new Date()
    }
  });

  await prisma.feedbackResponse.create({
    data: {
      thread_id: feedbackThread.id,
      user_id: user.id,
      response_text: 'Great product!',
      created_at: new Date()
    }
  });

  await prisma.survey.create({
    data: {
      thread_id: feedbackThread.id,
      survey_link: 'https://surveylink.com',
      created_at: new Date()
    }
  });

  await prisma.promoCode.create({
    data: {
      thread_id: feedbackThread.id,
      code: 'PROMO2023',
      created_at: new Date()
    }
  });

  console.log('Seed data created');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
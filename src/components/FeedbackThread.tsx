import { FeedbackThreadData } from '../pages/index';

interface FeedbackThreadProps {
  thread: FeedbackThreadData;
}

export const FeedbackThread: React.FC<FeedbackThreadProps> = ({ thread }) => {
  return (
    <div>
      <h2>{thread.title}</h2>
      <p>{thread.content}</p>
    </div>
  );
};
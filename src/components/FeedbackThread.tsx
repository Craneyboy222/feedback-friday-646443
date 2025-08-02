import React from 'react';

interface FeedbackThreadProps {
  thread: {
    id: string;
    title: string;
    content: string;
  };
}

const FeedbackThread: React.FC<FeedbackThreadProps> = ({ thread }) => {
  return (
    <div className="feedback-thread">
      <h2>{thread.title}</h2>
      <p>{thread.content}</p>
    </div>
  );
};

export default FeedbackThread;

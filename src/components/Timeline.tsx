import React from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      <div className="border-l-2 border-gray-200">
        {events.map((event, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white" />
            <p className="text-sm text-gray-500">{event.date}</p>
            <h4 className="text-lg font-semibold">{event.title}</h4>
            <p className="text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

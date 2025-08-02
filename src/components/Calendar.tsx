import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface CalendarProps {
  events: Array<{ title: string; date: string }>;
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      aria-label="Calendar"
    />
  );
};

export default Calendar;

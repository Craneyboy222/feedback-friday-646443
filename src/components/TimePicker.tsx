import React from 'react';
import { TimePicker } from 'antd';
import 'antd/dist/antd.css';

interface TimePickerProps {
  value: moment.Moment | null;
  onChange: (time: moment.Moment | null, timeString: string) => void;
}

const CustomTimePicker: React.FC<TimePickerProps> = ({ value, onChange }) => {
  return <TimePicker value={value} onChange={onChange} aria-label="Select time" />;
};

export default CustomTimePicker;

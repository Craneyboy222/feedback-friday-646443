import React from 'react';

interface VideoProps {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
}

const Video: React.FC<VideoProps> = ({ src, controls = true, autoPlay = false, loop = false, className }) => {
  return (
    <video className={className} controls={controls} autoPlay={autoPlay} loop={loop}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;

import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

type TooltipProps = {
  content: string;
  children: React.ReactElement;
};

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <Tippy content={content} arrow={true} delay={[500, 0]}>
      {children}
    </Tippy>
  );
};

export default Tooltip;

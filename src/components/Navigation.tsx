import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-700 text-white p-2">
      <ul className="flex space-x-2">
        <li><NavLink to="/feedback" activeClassName="font-bold">Feedback</NavLink></li>
        <li><NavLink to="/surveys" activeClassName="font-bold">Surveys</NavLink></li>
        <li><NavLink to="/notifications" activeClassName="font-bold">Notifications</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
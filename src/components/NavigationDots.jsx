/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

export const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work', 'skills', 'footer'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

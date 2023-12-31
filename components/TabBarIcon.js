import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDays, faListUl, faFaceKissWinkHeart, faUserPlus, faCog } from '@fortawesome/free-solid-svg-icons';

export default function TabBarIcon(props) {
  const { name, color, size } = props;
  let icon;

  switch (name) {
    case 'calendar':
      icon = faCalendarDays;
      break;
    case 'todos':
      icon = faListUl;
      break;
    case 'anniversary':
      icon = faFaceKissWinkHeart;
      break;
    case 'users':
      icon = faUserPlus;
      break;
    case 'settings':
      icon = faCog;
      break;
  }

  return <FontAwesomeIcon icon={icon} color={color} size={size} />;
}

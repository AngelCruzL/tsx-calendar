import React from 'react';
import { CustomEvent } from '../../interfaces';

function CalendarEvent({ event }: { event: CustomEvent }) {
  const { title, user } = event;

  return (
    <div>
      <strong>{title}</strong>
      <span> - {user!.name}</span>
    </div>
  );
}

export default CalendarEvent;

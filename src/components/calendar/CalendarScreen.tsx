import React from 'react';
import { Calendar, Event, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import Navbar from '../ui/Navbar';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events: Event = {
  title: 'Cumpleaños de Ángel',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
};

const CalendarScreen = () => {
  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={[events]}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default CalendarScreen;

import React from 'react';
import {
  Calendar,
  Event,
  EventPropGetter,
  momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';

import Navbar from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/dist/locale/es';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events: Event = {
  title: 'Cumpleaños de Ángel',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
};

const CalendarScreen = () => {
  const eventStyleGetter: EventPropGetter<Event> = (
    event,
    start,
    end,
    isSelected
  ) => {
    console.log(event, start, end, isSelected);
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0',
      opacity: 0.8,
      display: 'block',
      color: '#fff',
    };

    return { style };
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={[events]}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default CalendarScreen;

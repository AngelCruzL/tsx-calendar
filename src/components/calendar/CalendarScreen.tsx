import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import {
  Calendar,
  EventPropGetter,
  momentLocalizer,
  View,
} from 'react-big-calendar';

import Navbar from '../ui/Navbar';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { messages } from '../../helpers/calendar-messages-es';
import { CustomEvent } from '../../interfaces';

import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/dist/locale/es';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events: CustomEvent = {
  title: 'Cumpleaños de Ángel',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  notes: 'Comprar el pastel',
  user: {
    _id: '115',
    name: 'Luis',
  },
};

const CalendarScreen = () => {
  const dispatch = useDispatch();

  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem('lastView') as View) || 'month'
  );

  const onDobleClick = (e: CustomEvent) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e: CustomEvent) => {
    console.log('onSelectEvent', e);
  };

  const onViewChange = (e: View) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  // prettier-ignore
  const eventStyleGetter: EventPropGetter<CustomEvent> = (event, start, end, isSelected) => {
    // console.log(event, start, end, isSelected);
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
        onDoubleClickEvent={onDobleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;

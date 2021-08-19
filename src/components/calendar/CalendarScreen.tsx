import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import {
  Calendar,
  EventPropGetter,
  momentLocalizer,
  View,
} from 'react-big-calendar';

import Navbar from '../ui/Navbar';
import AddNewFab from '../ui/AddNewFab';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { messages } from '../../helpers/calendar-messages-es';
import { CustomEvent } from '../../interfaces';
import { eventSetActive } from '../../actions/events';

import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/dist/locale/es';

moment.locale('es');

const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
  const dispatch = useDispatch();
  const { events } = useSelector(state => state.calendar);

  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem('lastView') as View) || 'month'
  );

  const onDobleClick = (e: CustomEvent) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e: CustomEvent) => {
    dispatch(eventSetActive(e));
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
        events={events}
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

      <AddNewFab />

      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;

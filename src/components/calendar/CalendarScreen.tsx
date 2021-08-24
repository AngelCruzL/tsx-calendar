import React, { useEffect, useState } from 'react';
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
import {
  eventClearActive,
  eventSetActive,
  eventStartLoading,
} from '../../actions/events';

import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/dist/locale/es';
import DeleteEventFab from '../ui/DeleteEventFab';
import { ReducersState } from '../../reducers/rootReducer';

moment.locale('es');

const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(
    (state: ReducersState) => state.calendar
  );
  const { uid } = useSelector((state: ReducersState) => state.auth);

  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem('lastView') as View) || 'month'
  );

  useEffect(() => {
    dispatch(eventStartLoading());
  }, [dispatch]);

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

  const onSelectSlot = () => {
    dispatch(eventClearActive());
  };

  // prettier-ignore
  const eventStyleGetter: EventPropGetter<CustomEvent> = (event, start, end, isSelected) => {
    // console.log(event, start, end, isSelected);
    const style = {
      backgroundColor: uid === event.user?.uid ? '#367CF7' : 'rgb(79, 90, 135)',
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
        onSelectSlot={onSelectSlot}
        selectable={true}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <AddNewFab />

      {activeEvent && <DeleteEventFab />}

      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;

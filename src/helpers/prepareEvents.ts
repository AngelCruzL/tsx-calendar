import moment from 'moment';
import { CustomEvent, EventResponse } from '../interfaces';

export const prepareEvents = (events: EventResponse[] = []): CustomEvent[] => {
  return events.map(event => ({
    title: event.title,
    start: moment(event.start).toDate(),
    end: moment(event.end).toDate(),
    id: event.id,
    notes: event.notes,
    user: {
      uid: event.user._id,
      name: event.user.name,
    },
  }));
};

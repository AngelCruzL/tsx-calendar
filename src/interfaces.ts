import { Event } from 'react-big-calendar';

export interface CustomEvent extends Event {
  notes: string;
  user: User;
}

export interface User {
  _id: string;
  name: string;
}

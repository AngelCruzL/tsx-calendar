import { Event } from 'react-big-calendar';
import { User } from './User';

export interface CustomEvent extends Event {
  id?: number;
  notes?: string;
  user?: User;
}

import { UserResponse } from './UserResponse';

export interface EventResponse {
  title: string;
  start: string;
  end: string;
  user: UserResponse;
  id: string;
  notes?: string;
}

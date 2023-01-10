import { TweetType } from './dashboard.enum';

export interface Tweet {
  id: string;
  name: string;
  username: string;
  avatar: string;
  message: string;
  created_at: number;
  type: TweetType;
}

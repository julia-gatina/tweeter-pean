import { TweetType } from './dashboard.enum';

export interface Tweet {
  name: string;
  username: string;
  avatar: string;
  message: string;
  created_at: string;
  type: TweetType;
}

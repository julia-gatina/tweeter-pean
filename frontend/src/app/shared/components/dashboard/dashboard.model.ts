import { TweetType } from './dashboard.enum';

export interface Tweet {
  id: string;
  message: string;
  type: TweetType;
  user: TweetUser;
  created_at: number;
}

export interface TweetUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

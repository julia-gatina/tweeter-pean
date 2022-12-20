export interface Tweet {
  user: TweetUser;
  message: string;
  created_at: number;
}

export interface TweetUser {
  name: string;
  avatar: string;
  username: string;
}

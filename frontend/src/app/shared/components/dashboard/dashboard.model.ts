export interface Tweet {
  user: TweetUser;
  content: {
    text: string;
  };
  created_at: number;
}

export interface TweetUser {
  name: string;
  avatars: string;
  handle: string;
}

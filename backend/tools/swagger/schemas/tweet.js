module.exports = {
  components: {
    schemas: {
      /**
       * @openapi
       * components:
       *  schemas:
       *    TweetResponseDto:
       *      type: object
       *      properties:
       *        name:
       *          type: string
       *        username:
       *          type: string
       *        avatar:
       *          type: string
       *        message:
       *          type: string
       *        created_at:
       *          type: timestamp
       *        type:
       *          type: string
       *
       *      example:
       *        name: 'Jane Doe'
       *        username: '@JaneDoe'
       *        avatar: '73hZDYK'
       *        message: 'Some text here'
       *        type: 'tweet'
       *        created_at: 'Tue Dec 13 2022'
       */
      TweetResponseDto: {},

      /**
       * @openapi
       * components:
       *  schemas:
       *    PostTweetRequestDto:
       *      type: object
       *      required:
       *        - type
       *        - message
       *      properties:
       *        type:
       *          type: TweetType
       *        message:
       *            type: string
       *
       *      example:
       *        type: 'tweet'
       *        message: 'Some text here'
       */
      PostTweetRequestDto: {}
    }
  }
};

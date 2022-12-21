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
       *          type: Date
       *        type:
       *          type: string
       *
       *      example:
       *        name: Jane Doe
       *        username: @JaneDoe
       *        avatar: '73hZDYK'
       *        message: 'Some text here'
       *        type: 'tweet'
       *        created_at: 2022-12-10
       */
      TweetResponseDto: {},

      /**
       * @openapi
       * components:
       *  schemas:
       *    PostTweetRequestDto:
       *      type: object
       *      required:
       *        - user
       *        - message
       *      properties:
       *        user:
       *          type: object
       *          required:
       *            - name
       *            - avatar
       *            - handle
       *          properties:
       *            name:
       *              type: string
       *            avatar:
       *              type: string
       *            handle:
       *              type: string
       *        message:
       *            type: string
       *      example:
       *        user:
       *          name: Jane Doe
       *          avatar: '73hZDYK'
       *          handle: '@Janedoe'
       *        message: 'Some text here'
       */
      PostTweetRequestDto: {}
    }
  }
};

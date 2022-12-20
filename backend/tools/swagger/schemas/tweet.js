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
       *        user:
       *          type: object
       *          properties:
       *            name:
       *              type: string
       *            avatar:
       *              type: string
       *            handle:
       *              type: string
       *        message:
       *          type: string
       *        created_at:
       *          type: number
       *
       *      example:
       *        user:
       *          name: Jane Doe
       *          avatar: '73hZDYK'
       *          handle: '@Janedoe'
       *        message: 'Some text here'
       *        created_at: 1670024330328
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

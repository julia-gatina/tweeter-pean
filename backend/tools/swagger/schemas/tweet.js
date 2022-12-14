module.exports = {
  components: {
    schemas: {
      /**
       * @openapi
       * components:
       *  schemas:
       *    GetTweetResponseDto:
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
       *          avatar: 'https://i.imgur.com/73hZDYK.png'
       *          handle: '@Janedoe'
       *        message: 'Some test here'
       *        created_at: 1670024330328
       */
      GetTweetResponseDto: {},

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
       *          avatar: 'https://i.imgur.com/73hZDYK.png'
       *          handle: '@Janedoe'
       *        message: 'Some test here'
       */
      PostTweetRequestDto: {}
    }
  }
};

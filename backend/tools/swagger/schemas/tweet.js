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
       *            avatars:
       *              type: string
       *            handle:
       *              type: string
       *        content:
       *          type: object
       *          properties:
       *            text:
       *              type: string
       *        created_at:
       *          type: number
       *
       *      example:
       *        user:
       *          name: Jane Doe
       *          avatars: 'https://i.imgur.com/73hZDYK.png'
       *          handle: '@Janedoe'
       *        content:
       *          text: 'Some test here'
       *        created_at: 1670024330328
       */
      GetTweetResponseDto: {}
    }
  }
};

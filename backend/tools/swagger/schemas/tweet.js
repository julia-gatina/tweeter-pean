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
       *        id:
       *          type: string
       *        name:
       *          type: string
       *        username:
       *          type: string
       *        avatar:
       *          type: string
       *        message:
       *          type: string
       *        created_at:
       *          type: number
       *        type:
       *          type: string
       *
       *      example:
       *        id: 'f9cddd3a-0e9e-4c9f-94d1-d99592b7cdae'
       *        name: 'Jane Doe'
       *        username: '@JaneDoe'
       *        avatar: '73hZDYK'
       *        message: 'Some text here'
       *        type: 'tweet'
       *        created_at: 1670959872000
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
       *          type: string
       *
       *      example:
       *        type: 'tweet'
       *        message: 'Some text here'
       */
      PostTweetRequestDto: {}
    }
  }
};

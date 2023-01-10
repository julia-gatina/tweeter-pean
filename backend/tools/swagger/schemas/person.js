module.exports = {
  components: {
    schemas: {
      /**
       * @openapi
       * components:
       *  schemas:
       *    PersonResponseDto:
       *      type: object
       *      properties:
       *        name:
       *          type: string
       *        age:
       *          type: smallInt
       *
       *      example:
       *        name: 'Jane Doe'
       *        age: 35
       */
      PersonResponseDto: {},

      /**
       * @openapi
       * components:
       *  schemas:
       *    PostPersonRequestDto:
       *      type: object
       *      required:
       *        - name
       *      properties:
       *        name:
       *          type: string
       *        age:
       *          type: smallInt
       *
       *      example:
       *        name: 'John Smith'
       *        age: 28
       */
      PostPersonRequestDto: {}
    }
  }
};

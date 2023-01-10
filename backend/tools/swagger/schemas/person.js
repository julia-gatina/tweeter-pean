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
       *        id:
       *          type: string
       *        name:
       *          type: string
       *        age:
       *          type: smallInt
       *
       *      example:
       *        id: '98d9250e-77db-4587-9c12-96302722b161'
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

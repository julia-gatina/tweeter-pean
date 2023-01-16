/**
 * Prints error and returns it further.
 */
const errorHandler = () => {
  return (error) => {
    console.error(error);
    throw error;
  };
};

module.exports = {
  errorHandler
};

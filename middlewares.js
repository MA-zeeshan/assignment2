export const secureApi = (req, res, next) => {
  console.log('i am in the middleware');
  next();
};

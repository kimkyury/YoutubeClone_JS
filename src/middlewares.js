export const localsMiddleware = (req, res, next) => {
  res.locals.loggendIn = Boolean(req.session.loggedin);
  res.locals.sitename = "DIBIDIP";
  res.locals.loggedInUser = req.session.user || {};
  next();
};

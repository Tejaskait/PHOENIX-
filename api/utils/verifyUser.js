import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, 'Unauthorized'));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden'));
    req.user = user;
    next();
  });
};

export const verifyAdmin = (req, res, next) => {
  try {
    if (!req.user) {
      return next(errorHandler(401, 'Unauthorized'));
    }

    const isAdmin = req.user.email === process.env.ADMIN_EMAIL;
    if (!isAdmin) {
      return next(errorHandler(403, 'Access restricted to admins only.'));
    }

    next(); // User is an admin, proceed
  } catch (error) {
    next(errorHandler(500, 'Server error occurred during admin verification.'));
  }
};


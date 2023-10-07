import { allowedOrigins } from "./allowedOrigins.js";

export const corsOptions = {
  origin: (origin, callback) => {
    //!origin is used postman request during api testing because postman don't have origin.If we want we can remove it during production(deployment).In that case we can write: (allowedOrigins.indexOf(origin) !== -1).
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

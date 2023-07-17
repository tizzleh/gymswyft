import express from "express";
import session from "express-session";
import passport from "passport";

import "./passport-config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, () => console.log("Server started on port 3000"));


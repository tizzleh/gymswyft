import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// For simplicity, we will use a hard-coded user.
// In real-world applications, you'll be fetching this from your database.
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  password: bcrypt.hashSync("password", 10)
};

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    // Here you should usually use a service to fetch the user from your database.
    if (email !== user.email) {
      return done(null, false, { message: "Incorrect username." });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: "Incorrect password." });
    }
    return done(null, user);
  })
);

passport.serializeUser((user: User, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done) => {
  // Here you should usually use a service to fetch the user from your database.
  if (id !== user.id) {
    return done(new Error("User not found"));
  }
  done(null, user);
});


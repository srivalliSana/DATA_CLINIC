import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import session from "express-session";

import { connectDB } from "./db.js";
import User from "./models/User.js";
import authRoutes from "./routes/auth.js";
import uploadRoutes from "./routes/upload.js";
import aiRoutes from "./routes/ai.js";
import reportsRoutes from "./routes/reports.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// Sessions (required for Passport)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboardcat",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Connect DB
connectDB();

/* --------------------------
   GOOGLE OAUTH STRATEGY
--------------------------- */
passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;

        // 🔹 Check if a user already exists (normal login OR Google login)
        let user = await User.findOne({ email });

        if (!user) {
          // New Google user → create record
          user = new User({
            name: profile.displayName,
            email,
            password: "", // no password for Google accounts
          });
          await user.save();
        }

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

/* --------------------------
   ROUTES
--------------------------- */
// Use auth routes
app.use("/api", authRoutes);
app.use("/api", uploadRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api", reportsRoutes);

// --- GOOGLE LOGIN ---
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:5173/auth/login" }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id, email: req.user.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 🔹 Always redirect with token, name, and email
    res.redirect(
      `http://localhost:5173/auth/success?token=${token}&email=${req.user.email}&name=${encodeURIComponent(
        req.user.name
      )}`
    );
  }
);

/* --------------------------
   ROOT
--------------------------- */
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful
import { connectToDB } from "@/lib/mongo";
import { User } from "@/lib/mongo/models";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = credentials;

          // logic to salt and hash password
          connectToDB();

          // logic to verify if the user exists
          user = await User.findOne({ email });
          console.log(user);

          if (!user) {
            throw new Error("Invalid credentials.");
          }

          const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
          );
          console.log(isPasswordCorrect);

          if (!isPasswordCorrect) {
            throw new Error("Invalid Password");
          }

          // return JSON object with the user data
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          };
        } catch (error) {
          console.log(error);
          // Return `null` to indicate that the credentials are invalid
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Add user data to JWT during sign-in
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach full user data to the session
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.isAdmin = token.isAdmin;

      return session;
    },
  },
  trustHost: true,
});

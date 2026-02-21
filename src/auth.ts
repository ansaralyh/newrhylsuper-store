import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { Admin } from "@/models/Admin";
import { User } from "@/models/User";
import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        await connectDB();

        // Check Admin first (for administrative tasks)
        const admin = await Admin.findOne({ email: credentials.email as string });
        if (admin) {
          if (admin.status === "suspended") return null;
          const valid = await bcrypt.compare(
            credentials.password as string,
            admin.password
          );
          if (valid) {
            return {
              id: admin._id.toString(),
              email: admin.email,
              name: admin.name,
              role: admin.role,
              status: admin.status,
            };
          }
        }

        // Check regular User
        const user = await User.findOne({ email: credentials.email as string });
        if (user) {
          if ((user as any).status === "suspended") return null;
          const valid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );
          if (valid) {
            return {
              id: user._id.toString(),
              email: user.email,
              name: user.name,
              role: "user",
              status: (user as any).status || "active",
            };
          }
        }

        return null;
      },
    }),
  ],
});

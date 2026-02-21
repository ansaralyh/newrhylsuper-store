import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [], // Empty for now, will be populated in auth.ts for Node runtime
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.status = (user as any).status;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        (session.user as any).id = token.id as string;
        (session.user as any).role = token.role as string;
        (session.user as any).status = token.status as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;

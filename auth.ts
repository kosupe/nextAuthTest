import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [Discord({clientId: process.env.AUTH_DISCORD_ID as string, clientSecret: process.env.AUTH_DISCORD_SECRET as string})],
    basePath: "/api/auth",
    callbacks: {
        authorized({request, auth}){
            
            try{
                const {pathname} = request.nextUrl;
                if(pathname === "/protected-pge") return !!auth;
                return true;
            } catch(err) {
                console.log(err);
            }
            
        },

        jwt({ token, trigger, session, account}) {
            if(account){
                token.id = account.providerAccountId
                console.log("初回");
            }
            
            if(trigger === "update") token.name = session.name;
            return token;
        },

        session({ session, user, token }) {
            console.log(session);
            session.user.id = token.id as string
            return session
        },

        
    },
    session: {
        // sesstionTime (second)
        maxAge: 600
    }
})  
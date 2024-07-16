
import { auth } from "@/auth";

import Image from "next/image";
import layout from "./page.module.scss";

//http://localhost:3000/api/auth/callback/discord
export default async function Home() {
    const session = await auth();

    return (
        <main className={layout.main}>
        home <br />
        <img className={layout.userAccountImg} src={session?.user?.image as string} />
        <br />id : {session?.user?.id}
        </main>
    );
}

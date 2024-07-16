import React from 'react'

import layout from "./signinButton.module.scss";
import { signIn } from '@/auth';
import { handleSignin } from '../../serverActions/serverAction';

export default async function SigninButton() {
    return(
        <form action={handleSignin}>
            <button type='submit' className={layout.button}>
                Signin
            </button>
        </form>
    );
}

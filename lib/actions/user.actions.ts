"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({ email, password }: signInProps) => {

    try {
        // Mutation / Database / Make fetch 
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(email, password);

        return parseStringify(response);
    } catch (error) {
        console.error("Error:", error)
    }
}

export const signUp = async (userData: SignUpParams) => {

    try {
        // Create a user account 
        // When the form is submitted, we want to send the email and password to Appwrite 
        // to authenticate the user. (Step 5)

        const { account } = await createAdminClient();

        const { email, password, firstName, lastName } = userData;

        const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);

        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-hellasbank-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUserAccount);

    } catch (error) {
        console.error("Error:", error)
    }
}


export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const user = await account.get();

        return parseStringify(user);
    } catch (error) {
        return null;
    }
}

export const logoutAccount = async () => {
    try {
        const { account } = await createSessionClient();

        cookies().delete("appwrite-hellasbank-session");

        await account.deleteSession("current");

    } catch (error) {
        return null;
    }
}
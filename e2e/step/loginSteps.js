import {emailField, loginButton} from "../screen/loginScreen";

export async function i_login_as_user(email) {
    await element(emailField).typeText(email);
    await element(loginButton).tap();
}

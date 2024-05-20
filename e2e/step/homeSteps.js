import {pumaButton, adidasButton, nikeButton} from "../screen/homeScreen";

export async function i_should_see_home_screen() {
    await expect(element(pumaButton)).toBeVisible();
    await expect(element(adidasButton)).toBeVisible();
    await expect(element(nikeButton)).toBeVisible();
}

export async function i_choose_nike_shop(){
    await element(nikeButton).tap();
}

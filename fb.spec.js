

// import { test } from '@playwright/test';
// import { Loginpage } from '../pages/Loginpage';

// test('test', async ({ page }) => {
// const Login = new Loginpage(page)
// await Login.gotoLogin()
// await Login.enteremail("segun")
// await Login.enterpassword("babalola")
// await Login.clickBtn()
// });



import { test } from '@playwright/test';
import { Signuppage } from '../pages/Signuppage';

test('test', async ({ page }) => {
const Signup = new Signuppage(page)
await Signup.gotoSignup()
await Signup.clickBtn()
await Signup.enterfirstname(segun)
await Signup.entersurname(femi)
await Signup.enteremail(tweeet)
await Signup.enternewpassword(babalola)
await Signup.entergender(Male)
await Signup.clickBtn()
});





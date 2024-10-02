
// exports.Loginpage = class Loginpage{
//     constructor(page){
//         this.page = page;
//         this.email = page.locator("//input[@id='email']");
//         this.password = page.locator("//input[@id='pass']");
//         this.createBtn = page.getByTestId("open-registration-form-button");
//         // this.createBtn = page.getByTestId("//button[@name='login']");
//     }

//     async gotoLogin(){
//         await this.page.goto("https://web.facebook.com/");

//     }

//     async loginToFacebook(email,password){
//         await this.email.fill(email);
//         await this.password.fill(password);
//         await this.createBtn.click();

//     }

//     async enteremail(email){
//         await this.page.waitForSelector("//input[@id='email']", { timeout: 30000 });
//         await this.email.fill(email);
//     }

//     async enterpassword(password){
//         await this.page.waitForSelector("//input[@id='pass']", { timeout: 30000 });
//         await this.password.fill(password);
//     }

//     async clickBtn(){
//         await this.createBtn.click();
//     }

// };


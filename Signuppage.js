

exports.Signuppage = class Signuppage{
    constructor(page){
        this.page = page;
        this.CreateBtn = page.getByTestId('open-registration-form-button');
        this.firstname = page.locator("//input[@name='firstname']");
        this.surname = page.locator("//input[@name='surname']");
        this.email = page.locator("//input[@name='reg_email__']");
        this.newpassword = page.locator("//input[@id='password_step_input']");
        this.gender = page.locator("//input[@id='sex'])[2]");
        this.signupBtn = page.locator('//button[@name="websubmit"]');
    }


    async gotoSignup(){
        await this.page.goto("https://web.facebook.com/");

    }

    async SignupToFacebook(createaccount,firstname,surname,email,newpassword,gender,Signup){
        await this.createBtn.click();
        await this.firstname.fill(firstname);
        await this.surname.fill(surname);
        await this.email.fill(email);
        await this.newpassword.fill(newpassword);
        await this.gender.fill(gender);
        await this.signupBtn.click();
       

    }

async clickBtn(){
    await this.createBtn.click();
}


    async enterfirstname(firstname){
        await this.page.waitForSelector("//input[@name='firstname']", { timeout: 60000 });
        await this.email.fill(firstname);
    }

        async entersurname(surname){
            await this.page.waitForSelector("//input[@name='surname']", { timeout: 60000 });
            await this.surname.fill(surname);
        }

        async enteremail(email){
            await this.page.waitForSelector("//input[@name='reg_email__']", { timeout: 60000 });
            await this.email.fill(email);
        }


    async enternewpassword(newpassword){
        await this.page.waitForSelector("//input[@id='password_step_input']", { timeout: 60000 });
        await this.password.fill(password);
    }

    async entergender(gender){
        await this.page.waitForSelector("//input[@id='sex'])[2]", { timeout: 60000 });
        await this.gender.fill(gender);
    }


    async clickBtn(){
        await this.signupBtn.click();
    }

};


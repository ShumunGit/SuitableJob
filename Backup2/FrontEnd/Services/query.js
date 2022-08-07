import { db } from './db_access.js';
import { genreteHash, checkPassword } from './encryption.js';

/*
export const customersLst =   () => {
         db.query("SELECT * FROM customers", function (err, rows, fields) {
        if (err) throw err;
        console.log(`Results: ${JSON.stringify(rows)}`);
    })
}
*/
// check if customer exists.
export const getCustomer = async (EmailAddress) => {

    try {
        const [customer] = await db.query(`SELECT * FROM customers WHERE Email='${EmailAddress}'`);
        //console.log(customer);
        return customer
    } catch (error) {
        console.log(error);
    }

}

// add new customer to the db if not found. 
export const SetCustomer = async (req) => {
    const { Fname, Lname, email, phone, password, cpassword } = req.body;
    const HashedPassword = await genreteHash(password);
    const customer = await getCustomer(req);

    if (!customer[0]) {
        try {
            await db.query(`INSERT INTO customers (Fname, Lname, Email, Phone, Password, Cpassword)
            VALUES ('${Fname}', '${Lname}', '${email}', '${phone}', '${password}', '${HashedPassword}')`);
            console.log("Customer registered");
        } catch (error) {
            console.log(error);
        }
    }
}

// Log in with email address. 
export const Login = async (req,res) => {
    
    const { email, password } = req.body;
    const [pwd] = await db.query(`SELECT Cpassword FROM customers WHERE Email='${email}'`)
    if(pwd[0]){
        const hashedPasswor = pwd[0].Cpassword;
        const verifiedPwd = await checkPassword(password, hashedPasswor);
        //console.log(verifiedPwd);
        return verifiedPwd;
    }else{
        //console.log("Email is not exists");
        return false;
    }


}

// insert customer contact form. 
export const CustomerContact = async (req) => {
    const { fname, lname, email, phone, subject, textarea } = req.body;

    if (true) {
        try {
            await db.query(`INSERT INTO Contact (Fname, Lname, Email, Phone, Subject, TextArea)
            VALUES ('${fname}', '${lname}', '${email}', '${phone}', '${subject}', '${textarea}')`);
            console.log("customer send message");
        } catch (error) {
            console.log(error);
        }
    }

}

/*
// Log in with email address. 
export const Login = async (req) =>{
    const { email, password } = req.body;
    const hashedPassword = await genreteHash(password);
    const customer  = await getCustomer(email);

    if(customer){
        try {

            await db.query(`INSERT INTO customer_login (userEmail, userPwd)
            VALUES ('${email}', '${hashedPassword}')`);

            const [client] = await db.query(`SELECT * FROM customers WHERE Email='${email}'`);
            //console.log(client[0].Email);
            return customer;
        } catch (error) {
            console.log(error);
        }
    }else{
        console.log('email not exists')
    }
}*/



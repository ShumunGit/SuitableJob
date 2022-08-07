import bcrypt from 'bcryptjs';

export const genreteHash = async (Userpassword, saltRounds=10) => {
    try{

        const hashedPassword = await bcrypt.hash(Userpassword, saltRounds);
        //console.log(hashedPassword);
        return hashedPassword;

    } catch (e){

        console.log(e)
    }
}

export const checkPassword = async (password, passwordHash) => {
    const match = await bcrypt.compare(password, passwordHash);
    //console.log(match);
    return match;
}

/*(async () => {
    await checkPassword('12345', '$2a$10$7Mhw.AyPkSu08BZVoePj2u1kTi.ckGAcwu7Wwb0GuFRu0R9Am.8Kq');
})()*/

//bcrypt.compare(myPassword, '$sa$1dd0$CgQFwuT0MHZq0.BE2K50muc.OPGDBm4mdkyXtzpxjOX2sE4airK52', function (err, result) {
  //  console.log(result);
//})
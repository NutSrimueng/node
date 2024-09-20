import mailChecker from 'mailchecker'
//่jenny.com->No
//nut@->No
//nut@gmail.com.->Yes
//Nut@utk.ac.th->Yes
const database: any[] = []
//const database = [
//    {
//        email:'nut@gmail.com',
//        password:'loveyou555'
//    }
//]
function register(email: string, password: string){
    //เช็คmail
    if (mailChecker.isValid(email)){
//เช็ค password
        if(password.length>8 && password.length<16){
            const userObject ={
                email:email,
                password:password
            }
            database.push(userObject)
            console.log("สมัครสมาชิกเรียบร้อย")
        }else{
            console.log('รหัสผ่านต้องยาวกว่า 8 ตัวอักษร และไม่เปิด 16 ตัวอักษร')
        }
    }else{
        console.log('email ไม่ถูกต้อง')
    }
}
//เรียกใช้ function
register('Nut@utk.ac.th','nut123456789')
export const checkValidData = (email, password) => {
 
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email); // boolean
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password) // boolean

    if(!isEmailValid){
        return "*Email id is not Valid"
    }
    if(!isPasswordValid){
        return "*Password is not valid"
    }

};
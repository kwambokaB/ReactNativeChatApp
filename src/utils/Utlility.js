export default class Utility {
    static isValidPassword = (term) =>{
        console.log('valid');
        let Length = term.trim().length
        return Length >= 3 ? true : false
        
    }
    static isEmailValid = (term) =>{
        const expression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isvalid = expression.test(String(term)).toLowerCase()
        return
    }
}
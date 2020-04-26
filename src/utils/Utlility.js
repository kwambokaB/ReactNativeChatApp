import {Strings} from '../Constants/String'
import {Alert} from 'react-native'
export default class Utility {
    static isValidPassword = (term) =>{
        console.log('valid');
        let Length = term.trim().length
        return Length >= 8 ? true : false
        
    }
    static isEmailValid = (term) =>{
        const lowerterm = term.toLowerCase()
        const expression = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        let isValid = expression.test(String(lowerterm))
            isValid ? console.log('valid') : Alert.alert(Strings.InvalidEmailAdress)
    }
}
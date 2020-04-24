import React, {useState} from 'react'
import {View, Text, TouchableOpacity,Image, TextInput, KeyboardAvoidingView, SafeAreaView} from 'react-native'
import {main} from '../styles/mainStyles'
import { textInput} from '../styles/textInput'
import {Button} from '../styles/button'
import {String} from '../../Constants/String'
import DismissKeyboard from '../DismissKeyboard'
import Utility from '../../utils/Utlility'
import {Images} from '../../Constants/Images'

export default function SignInScreen() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [isLoading, setIsLoading] = useState('');

const validateEmail = () =>{
    const isValidEmail = Utility.isEmailValid(email)
    isValidEmail ? setEmailError('') : setEmailError(String.InvalidEmailAdress)
        return isValidEmail 
}
const validPassword = ()=>{
    const isValidPassword = Utility.isValidPassword(password)
    isValidPassword ? setPasswordError('') : setPasswordError(String.PasswordFields)
    return isValidPassword
}
    return (
        <DismissKeyboard>
        <KeyboardAvoidingView>
        <View style={main.container}>
        <SafeAreaView>
       <Image source ={Images.Logo} style={main.logo}></Image>
       <View style={textInput.TextFieldView}>
           <TextInput 
              style={textInput.TextField}
              placeholder = {String.EmailPlaceholder}
              autoCorrect = {false}
              onChangeText= { newValue => setEmail(newValue)}
              onEndEditing = {validateEmail}
              error={emailError}
           />
           
       </View>
       <View style={textInput.TextFieldView}>
       <TextInput 
               style={textInput.TextField}
              placeholder = {String.PasswordPlaceholder}
              secureTextEntry
              autoCorrect= {false}
              error={passwordError}
              onChangeText = {newValue=>setPassword(newValue)}
              onEndEditing={validPassword}
           />  
           
       </View>
           <View>
           <TouchableOpacity style={Button.button}>
               <Text style={Button.buttonText}>{String.Join}</Text>
           </TouchableOpacity>
           </View>
      
       </SafeAreaView>
       </View>
       </KeyboardAvoidingView>
       </DismissKeyboard>
    )
}

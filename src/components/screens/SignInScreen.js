import React, {Component} from 'react'
import {
    View, 
    Text, 
    TouchableOpacity,
    Image, 
    TextInput,
     KeyboardAvoidingView, 
     SafeAreaView, 
     Alert, 
     ActivityIndicator} from 'react-native'
import {main} from '../styles/mainStyles'
import {textInput} from '../styles/textInput'
import {Button} from '../styles/button'
import {Strings} from '../../Constants/String'
import DismissKeyboard from '../DismissKeyboard'
import Utility from '../../utils/Utlility'
import {Images} from '../../Constants/Images'
import firebase from '../../Firebase/firebase'
import { Color } from '../../utils/Color'


export default class SignInScreen extends Component {
state = {
    password : '',
    email: '',
    emailError: '',
    passwordError:'',
    isLoading: false,
}

validateEmail = () =>{
    const isValidEmail = Utility.isEmailValid(this.state.email)
    isValidEmail 
    ? this.setState({emailError : this.state.emailError}) 
    : this.setState({emailError : Strings.InvalidEmailAdress})
        return isValidEmail 
}
validatePassword = ()=>{
    const isValidPassword = Utility.isValidPassword(this.state.password)
    isValidPassword 
    ? this.setState({passwordError: this.state.passwordError}) 
    : this.setState({passwordError: Strings.PasswordFields})
    return isValidPassword
}
registration = (email, password) => {
    try{
        this.setState({isLoading : true})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user =>{
            this.setState({isLoading : false})
            console.log('Logged In')
        }).catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user=>{
                this.setState({isLoading : false})
                console.log('Created a new User');
            }).catch(error=>{
                this.setState({isLoading : false})
                Alert.alert(error)
            })
        })
    }
    catch (error){
        this.setState({isLoading : false})
       Alert.alert(error)
    }

}

performAuth = () => {
     let isValidEmail = this.validateEmail;
     let isValidPassword = this.validatePassword;
     if(isValidEmail && isValidPassword){
         this.registration(this.state.email, this.state.password)
     }


}

loader = () => {
    return(
        <View style={main.container}>
        <ActivityIndicator
           animating = {this.state.isLoading}
           size='large'
           color={Color.Lilac}
        />
        </View>
    )
}
renderItems = () => {
    return(
        <KeyboardAvoidingView>
        <SafeAreaView>
       <Image source ={Images.Logo} style={main.logo}></Image>
       <View style={textInput.TextFieldView}>
           <TextInput 
              style={textInput.TextField}
              placeholder = {Strings.EmailPlaceholder}
              value={this.state.email}
              autoCorrect = {false}
              onChangeText= {newValue => this.setState({email: newValue})}
              onEndEditing = {this.validateEmail}
           />
           
       </View>
       <View style={textInput.TextFieldView}>
       <TextInput 
               style={textInput.TextField}
              placeholder = {Strings.PasswordPlaceholder}
              value={this.state.password}
              secureTextEntry
              autoCorrect= {false}
              onChangeText = {newValue => this.setState({password: newValue})}
              onEndEditing={this.validatePassword}
           />  
           
       </View>
           <View>
          <TouchableOpacity 
           style={Button.button}
           onPress= {this.performAuth}
           >
               <Text style={Button.buttonText}>{Strings.Join}</Text>
           </TouchableOpacity> 
           </View>
      
       </SafeAreaView>    
       </KeyboardAvoidingView>
    )
}
 render(){

    return (
        <DismissKeyboard>
        <View style={main.container}>
        {this.state.isLoading ? this.loader() : this.renderItems()}
       </View>
       </DismissKeyboard>
    )
 }
}

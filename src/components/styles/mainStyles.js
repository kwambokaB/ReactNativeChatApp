 import {StyleSheet} from 'react-native'
 import {Constants} from '../../Constants/Constants'
 import {Color} from '../../utils/Color'

 export const main = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: Color.palepurple   
     },
     text: {
         color: Color.blackChocolate,
         fontSize: 24,
         fontWeight: "bold",
     },
     logo:{
        alignSelf: 'center',
        margin: 0.04 * Constants.screenHeight,
        marginTop: 0.15 *  Constants.screenHeight,
        height: 200,
        width:200,
        borderRadius: 200 / 2
    },
     
 })
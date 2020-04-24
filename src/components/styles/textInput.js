import { StyleSheet } from 'react-native'
import {Constants} from '../../Constants/Constants'
import {Color} from '../../utils/Color'

export const textInput = StyleSheet.create({
    TextFieldView: {
        height: Constants.screenHeight * 0.06,
        width: Constants.screenWidth *0.85,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 10,
        borderColor: Color.blackChocolate,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: Color.paleSpring
    },
    TextField: {
        fontSize: 14,
        flex: 1,
        marginHorizontal: 20
    },
    ErrorText: {
        fontSize: 12,
        color: Color.flame,
        marginBottom: -5,
        marginHorizontal: 20
    }
})
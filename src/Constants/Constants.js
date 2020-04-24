import {Dimensions, Platform} from 'react-native'

let headerHeight = Platform.OS == 'ios' ? 66 : 46
let screenHeight=  Dimensions.get('window').height

export const Constants = {
    headerHeight: headerHeight,
    footerHeight: 55,
    viewHeight: screenHeight - headerHeight,
    screenHeight: screenHeight,
    screenWidth: Dimensions.get('window').width,
}


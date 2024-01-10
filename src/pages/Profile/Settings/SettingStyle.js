import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/Colors';
import { Normalize } from '../../../utils/Size';
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.AppDefaultColor,
        // borderColor: 'red',
        // borderWidth: 1
    },
    main:{
        flex: 1,
        width:'100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent:'space-between',
     },
    card:{
        width:'100%',
         gap: 25
    }
});
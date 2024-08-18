import {View, ActivityIndicator, StyleSheet} from 'react-native'

function LoadingOverlay()
{
    return (
        <View>
            <ActivityIndicator size="large" color="white">
                
            </ActivityIndicator>
        </View>
    )
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    }
        
    
})
import {View, ActivityIndicator} from 'react-native'

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
import React from 'react'
import { Text, View } from 'react-native'

const user = (props) => {
    return (
        <View>
            <Text>
                {
                    JSON.stringify(props.data,null,2)
                }
            </Text>
        </View>
    )
}

export default user 

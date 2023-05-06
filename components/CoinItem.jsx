import React, {useContext} from 'react'
import { Text, View, Image } from 'react-native'
import { Styles } from './CoinItem.styles.js'
import { ThemeContext } from '../utils/ThemeManager.js'

export const CoinItem = ({item}) => {
    

    const { theme } = useContext(ThemeContext);

    return (
        <View
        style={Styles.cointainer}>
            <View style={Styles.imageContainer}>
            <Image
            source={{ uri: item.image }}
            style={{ width: 50, height: 50 }}
            />
                <Text 
                style={[Styles.symbol, Styles[`${theme}Symbol`]]}>
                    {item.symbol.toUpperCase()}
                </Text>
            </View>
            <View style={Styles.coinTextContainer}>
                <Text 
                style={theme === 'dark' ? Styles.dark : Styles.light}
                >{item.name}</Text>
                <Text
                style={theme === 'dark' ? Styles.dark : Styles.light} 
                >{item.current_price}
                </Text>
                <Text 
                style={item.price_change_percentage_24h > 0 ? Styles.priceUp : Styles.priceDown}
                >{item.price_change_percentage_24h}
                </Text>
            </View>
        </View>
    )
}
export default CoinItem;

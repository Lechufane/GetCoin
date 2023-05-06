import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StatusBar, Switch, Appearance } from "react-native";
import { GlobalStyles } from "./Styles.js";
import { TextInput } from "react-native";
import { CoinItem } from "./components/CoinItem.jsx";
import { ThemeContext, ThemeProvider } from "./utils/ThemeManager.js";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const getCoins = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      );
      const data = await res.json();
      setCoins(data);
    } catch (error) {
      console.error("fetch Error", error);
    }
  };

  useEffect(() => {
    getCoins();
  }, []);
  // console.log(theme)


  return (
    <View 
    style={[ GlobalStyles.container, GlobalStyles[`${theme}`]]}>
      <StatusBar 
      />
      <View style={GlobalStyles.header}>
        <Text style={[GlobalStyles.title, GlobalStyles[`${theme}`] ]}>GeTckoin</Text>
        <Switch 
            value={theme === 'dark' ? true : false}
            onValueChange={() => {
              toggleTheme()
              // console.log(theme)
            }}
            trackColor={ theme === 'dark' ? {false: '#3E0B71', true: '#81b0ff'} : {false: '#3E0B71', true: '#81b0ff'}}
            thumbColor={theme === 'dark' ? '#f5dd4b' : '#f4f3f4'}
            />
        <TextInput 
        style={GlobalStyles.searchInput}
        placeholderTextColor={theme === 'dark' ? '#fff' : '#D1CCCC'}
        placeholder='Search coins'
        onChangeText={(text) => setSearch(text)}
        />
      </View>
      <FlatList
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          getCoins()
          setRefreshing(false);
        }}
        style={GlobalStyles.list}
        data={
          search.length < 1 || search === "" || search === null || search === undefined || search === "Search coins" ?
          coins :
          coins.filter(c => c.name.toLowerCase().includes(search.toLowerCase() || c.symbol.toLowerCase().includes(search))) 
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <CoinItem item={item} />
          );
        }}
      />
    </View>
  );
};

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);


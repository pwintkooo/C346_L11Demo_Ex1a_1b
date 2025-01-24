import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
   listStyle: {
      borderWidth: 1,
   },
});

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
      fetch("https://jsonhost.com/json/036229a4187fdf58f935d1f275546f50")
          .then((response) => {
              return response.json();
          })
          .then((myJson) => {
              let myFilteredData = myJson.filter((item) =>
                  item.name.includes("soda")
              );
              setMyData(myFilteredData);
          })
  }, []);

  const renderItem = ({item, index, section}) => {
    return (
    <View style={styles.listStyle}>
    <Text>{item.name}</Text>
    </View>
    );
  };

   return (
    <View>
      <StatusBar/>
	  <Button title='Add Item' onPress={
      ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData)})}}/>
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;

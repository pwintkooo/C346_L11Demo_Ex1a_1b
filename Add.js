import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Add = ({navigation, route}) => {
  const[name,setName] = useState("");

  return (
    <View>
      <StatusBar/>
      <Text>Name:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
      <Button title='Submit'
      onPress={()=>{
          let myData = JSON.parse(route.params.datastr);
          let item = {name: name};
          myData.push(item);
          fetch("https://jsonhost.com/json/036229a4187fdf58f935d1f275546f50",
              {method: "POST",
              headers: {
                  "Content-Type":"application/json",
                  "Authorization":"funj4fn5d6qerc30xafg3nrupocoq2sf"
              },
              body:JSON.stringify(myData)
              })
              .then((response) => {
                  navigation.navigate("Home");
              })
        }
      }
      />
    </View>
  );
};

export default Add;

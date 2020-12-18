import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,FlatList,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from 'expo-constants';

// Home Screen
const HomeScreen =({ navigation, route })=> {
  
   const employees = [
    {
      eName: 'Muhammad Muneeb',
      eID: 118,
      eImage: 'Image Here!',
    },
    {
      eName: 'Farhan Shaukat',
      eID: 104,
      eImage: 'Image Here!',
    },
    {
      eName: 'Usman Najmi',
      eID: 118,
      eImage: 'Image Here!',
    },
    {
      eName: 'Farhan Khan',
      eID: 50,
      eImage: 'Image Here!',
    },
    {
      eName: 'Ali Imran',
      eID: 200,
      eImage: 'Image Here!',
    },
    {
      eName: 'Hazik Ijaz',
      eID: 113,
      eImage: 'Image Here!',
    },
  ];
const productslist = [
    {
      name: 'Mercedes Benz',
      price: 50000000 ,
      image: 'Image Here!',
    },
    {
      name: 'BMW GSA 1250',
      price: 420000,
      image: 'Image Here!',
    },
    {
      name: 'IPHONE 12 Pro',
      price: 300000,
      image: 'Image Here!',
    },
    {
      name: 'HP ENVY',
      price: 80000,
      image: 'Image Here!',
    },
    {
      name: 'GAMMING SYSTEM',
      price: 75000,
      image: 'Image Here!',
    },
  ];

  const orders = [
    {
      oName: 'Book',
      oID: 22231,
      oImage: 'Image Here!',
    },
    {
      oName: 'Daraz',
      oID: 12213,
      oImage: 'Image Here!',
    },
    {
      oName: 'GitHub',
      oID: 1342,
      oImage: 'Image Here!',
    },
    {
      oName: 'Ali Express',
      oID: 8324,
      oImage: 'Image Here!',
    }, 
    {
      oName: 'Digital Ocean',
      oID: 3114,
      oImage: 'Image Here!',
    },
  ];
  
  
  return (
    <View style={styles.container}>
      <Text style={{ color:'yellow', fontSize: 32, fontStyle: 'bold' }}>
        Products & Employee System
      </Text>
      <View style={{ paddingTop: 25 }} />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Employees List', {
            employeeObj: employees,
          })
        }
        style={styles.myBtn}>
        <Text style={styles.myBtnText}>Manage Employees</Text>
      </TouchableOpacity>
      <View style={{ paddingTop: 25 }} />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Products List', {
            productObj: productslist,
          })
        }
        style={styles.myBtn}>
        <Text style={styles.myBtnText}>Manage Products</Text>
      </TouchableOpacity>
      <View style={{ paddingTop: 25 }} />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Orders List', {
            orderObj: orders,
          })
        }
        style={styles.myBtn}>
        <Text style={styles.myBtnText}>Manage Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

// Separate Views
const EmployeesView=({ navigation, route })=> {
  const myObj = route.params.employeeObj;

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 20 }} />
      <FlatList
        data={myObj}
        renderItem={({ item }) => {
          return (
            <View style={{ padding: 5, width: 320 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Detail', {
                    itemName: item.eName,
                    itemSubDetails: 'ID: ' + item.eID,
                    itemImage: item.eImage,
                  })
                }
                style={styles.listTileStyle}>
                <Text style={styles.listTileLeadingText}>{item.eName}</Text>
                <Text style={styles.listTileTrailingText}>ID: {item.eID}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(index) => {
          return index;
        }}
      />
    </View>
  );
}
const ProductView =({ navigation, route })=> {
  const myObj = route.params.productObj;

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 20 }} />
      <FlatList
        data={myObj}
        renderItem={({ item }) => {
          return (
            <View style={{ padding: 5, width: 320 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Detail', {
                    itemName: item.name,
                    itemSubDetails: 'Rs ' + item.price,
                    itemImage: item.image,
                  })
                }
                style={styles.listTileStyle}>
                <Text style={styles.listTileLeadingText}>{item.name}</Text>
                <Text style={styles.listTileTrailingText}>Rs {item.price}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(index) => {
          return index;
        }}
      />
    </View>
  );
}


function OrdersView({ navigation, route }) {
  const myObj = route.params.orderObj;

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 20 }} />
      <FlatList
        data={myObj}
        renderItem={({ item }) => {
          return (
            <View style={{ padding: 5, width: 320 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Detail', {
                    itemName: item.oName,
                    itemSubDetails: 'ID: ' + item.oID,
                    itemImage: item.oImage,
                  })
                }
                style={styles.listTileStyle}>
                <Text style={styles.listTileLeadingText}>{item.oName}</Text>
                <Text style={styles.listTileTrailingText}>ID: {item.oID}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(index) => {
          return index;
        }}
      />
    </View>
  );
}

// Details Screen
function DetailScreen({ route }) {
  return (
    <View style={{ padding: 18,backgroundColor:'black'  }}>
      <Text style={styles.itemNameText}>{route.params.itemName}</Text>
      <Text style={styles.itemSubDetailsText}>
        {route.params.itemSubDetails}
      </Text>
      <View style={{ paddingTop: 20 }} />
      <View style={styles.imageStyle}>
        <Text style={{ color: 'white' }}>{route.params.itemImage}</Text>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

const MyStack=()=>
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products List" component={ProductView} />
        <Stack.Screen name="Employees List" component={EmployeesView} />
        <Stack.Screen name="Orders List" component={OrdersView} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor:"black"
  },
  myBtn: {
    alignItems: 'center',
    borderBottomWidth:2,
    borderBottomColor:'yellow',
    padding: 5,
    borderRadius: 10,
    width: 250,
  },
  myBtnText: {
    fontSize: 22,
    color: 'white',
  },
  listTileLeadingText: {
    fontSize: 20,
    color: 'white',
  },
  listTileStyle: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth:2,
    borderBottomColor:'blue',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listTileTrailingText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: 'white',
     },
  itemNameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'white',
    borderBottomWidth:2,
    borderBottomColor:'yellow',
  },
  itemSubDetailsText: {
    fontSize: 16,
    fontStyle: 'bold',
    color:'white',
  },
  imageStyle: {
    height: 250,
    width: 300,
    alignItems: ' center',
    justifyContent: 'center',
    borderWidth:2,
    borderColor:"yellow",
    borderRadius: 10,
  },
});

export default MyStack;
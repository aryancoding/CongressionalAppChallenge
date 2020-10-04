import { theme } from '../constants';
import React, { Component, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';

import { Button, Block, Text } from '../components';
import { FlatList } from 'react-native-gesture-handler';

export default class Browse extends Component {
  render() {
    const { navigation } = this.props;
    
    const completedOrders = [
      {
        id: "1",
        status: "Complete",
        name: "Sarah",
        dateCreated: "10/04/20",
        orderInfo: "Tomatoes, Onions, and Spinach from local Walmart",
        credentials: "email: sarahj@gmail.com"
      }
    ];
    
    return (
      <Block padding={[100, theme.sizes.base * 2]}>
        
        <Text h4 bold style={styles.borderPreviousOrders}>Current Order:</Text>
        
        
        
          <FlatList
            data={completedOrders}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 18 }}>
                    Order Created On: {item.dateCreated} {"\n"}
                    Status: {item.status} {"\n"}
                    Customer Name: {item.name} {"\n"}
                    Order Info: {item.orderInfo} {"\n"}
                    Credentials: {item.credentials} {"\n"}
                  </Text>
                </View>
              </View>
            )}
          />  
      

              

        <Text style={{ flex: 1 }}>
        </Text>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  borderPreviousOrders: {
    padding: 25,
    borderColor: 'black',
    borderWidth: 1
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: '#fffafa'
  }
})
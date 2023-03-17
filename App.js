import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity,StatusBar, Image, ScrollView, ImageBackground, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App  = ()=> {
  return ( 
    <><View style={{ flex: 1, backgroundColor: '#74B72E' }}>
      <StatusBar backgroundColor='#FFFFFF' barStyle="dark-content" />
      <View style={{ marginTop: 50, alignItems: 'center', justifyContent: 'center', }}>
        <Text style={{ fontSize: 25, fontweight: 'bolder', color: '#FFFFFF' }}>
          Hiling.id</Text>
      </View>
    </View><View style={{ flex: 1 }}>
        <FlatList
          data={dataTrending}
          showsVerticalScrollIndicator={false}
          style={{ marginLeft: 10 }}
          renderItem={() => (
            <TouchableOpacity
              style={{
                marginRight: 15,
                backgroundColor: '#FFFFFF',
                elevation: 3,
                paddingHorizontal: 15,
                paddingVertical: 15,
                marginBotton: 10,
                borderRadius: 15,
                marginLeft: 5,
              }}>

            </TouchableOpacity>)} />;
      </View></>
  );
}
export default App;
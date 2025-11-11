import React from 'react';
import { Tabs } from 'expo-router';
import CustomTabBar, { nameMap } from '@/src/tabBar/CustomTabBar';
import Header from '@/src/components/Header';


export default function TabLayout() {

  return (
    <Tabs 
      screenOptions={{headerShown: false}}
      tabBar={(props) => <CustomTabBar {...props} />}>
        <Tabs.Screen name="index" options={{header: () => <Header title={nameMap['index']}/>, headerShown: true }}/>
        <Tabs.Screen name="size" options={{header: () => <Header title={'Size Converter'}/>, headerShown: true }}/>
        <Tabs.Screen name="settings" options={{header: () => <Header title={nameMap['settings']}/>, headerShown: true }}/>
    </Tabs>
  );
}
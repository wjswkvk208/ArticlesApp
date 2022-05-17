import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';
import ArticleScreen from './ArticleScreen';
import LoginScreen from './LoginScreen';
import MainTab from './MainTab';
import RegisterScreen from './RegisterScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  useAuthLoadEffect();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: '회원가입'}}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: '로그인'}}
      />

      <Stack.Screen
        name="MyArticles"
        component={LoginScreen}
        options={{title: '내가 쓴 글'}}
      />

      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{title: '게시판'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;

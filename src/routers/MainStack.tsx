import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {API, Auth, graphqlOperation, Hub} from 'aws-amplify';
import {ActivityIndicator, Alert, View} from 'react-native';

import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import {authContext} from '../contexts/context';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const [loading, setLoading] = useState(true);
  const {user_data, setUserData, refetch, setRefetch}: any =
    useContext(authContext);


  const retrieveCurrentSession = () => {
    setLoading(true);
    Auth.currentAuthenticatedUser({bypassCache: true})
      .then((data: any) => {
        setUserData(data);
      })
      .catch(err => {
        setUserData(null);
        Alert.alert(err.message);
      })
      .finally(() => {
        setLoading(false);
        setRefetch(false);
      });
  };

  useEffect(() => {
    if (refetch) {
      retrieveCurrentSession();
    }
  }, [refetch]);

  if (loading || refetch) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{headerShown: false}}>
        {user_data ? (
          <Stack.Screen name="HomeStack" component={HomeStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </>
  );
};

export default MainStack;

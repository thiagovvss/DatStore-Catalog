import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Detail2 from './pages/Detail2';
import Detail3 from './pages/Detail3';
import Detail4 from './pages/Detail4';
import Detail5 from './pages/Detail 5';
import Detail6 from './pages/Detail 6';
import Detail7 from './pages/Detail 7';
import Detail9 from './pages/Detail 9';
import Detail8 from './pages/Detail 8';

const stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
                />
                <stack.Screen 
                name='Detail'
                component={Detail}
                />
                <stack.Screen 
                name='Detail2'
                component={Detail2}
                />
                <stack.Screen 
                name='Detail3'
                component={Detail3}
                />
                <stack.Screen 
                name='Detail4'
                component={Detail4}
                />
                <stack.Screen 
                name='Detail5'
                component={Detail5}
                />
                <stack.Screen 
                name='Detail6'
                component={Detail6}
                />
                <stack.Screen 
                name='Detail7'
                component={Detail7}
                />
                <stack.Screen 
                name='Detail8'
                component={Detail8}
                />
                <stack.Screen 
                name='Detail9'
                component={Detail9}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import HomeScreen from '../screens/HomeScreen';
import NewNoteScreen from '../screens/NewNoteScreen';
import SummaryScreen from '../screens/SummaryScreen';
import NotesHeader from './Header';
import IconButton from './IconButton';

const Tab = createBottomTabNavigator();

export default function BottomNavBar() {

    const navigation = useNavigation();

    const iconSize = 32;
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.tabBarLabelStyle,
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: true,
                    header: () => (
                        <NotesHeader
                            title="Home"
                            rightComponent={
                                <IconButton
                                    onPress={() => navigation.navigate('Settings')}
                                    imageSource={require("../assets/settings.png")}
                                    size={20}
                                />
                            }
                        />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? require('../assets/home-active.png')
                                    : require('../assets/home-inactive.png')
                            }
                            style={{ height: iconSize, width: iconSize }}
                        />
                    ),
                    tabBarLabel: 'Home',
                    tabBarActiveTintColor: COLORS.pink,
                    tabBarInactiveTintColor: COLORS.gray,
                }}

            />
            <Tab.Screen
                name="NewNote"
                component={NewNoteScreen}
                options={{
                    headerShown: true,
                    header: () => (
                        <NotesHeader
                            title="New Note"
                        />
                    ),
                    tabBarButton: () => (
                        <IconButton
                            size={iconSize}
                            style={styles.addNew}
                            imageSource={require('../assets/add-new.png')}
                            onPress={() => navigation.navigate('NewNote')}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Summary"
                component={SummaryScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? require('../assets/summary-active.png')
                                    : require('../assets/summary-inactive.png')
                            }
                            style={{ height: iconSize, width: iconSize }}
                        />
                    ),
                    tabBarLabel: 'Summary',
                    tabBarActiveTintColor: COLORS.pink,
                    tabBarInactiveTintColor: COLORS.gray,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: COLORS.darkPurple,
        borderTopWidth: 0,
        height: 100,
        paddingTop: 10,
    },
    tabBarLabelStyle: {
        paddingTop: 6,
        fontSize: 12
    },
    home: {},
    addNew: {
        marginTop: 8,
        alignSelf: 'center',
    },
    summary: {}
});  
import React, { Component, useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, FlatList, View, SafeAreaView, TouchableOpacity } from 'react-native';
import moment from 'moment/min/moment-with-locales';
import Colors from '../../contants/colors';
import { FontAwesome5 } from '@expo/vector-icons';
moment.locale('pt-br');

const CalendarLine = (props) => {

    const [selectedDate, setSelectedDate] = useState(moment());
    const [monthDays, setMonthDays] = useState();

    const list = useRef(null);

    useEffect(() => {
        setMonthDays(daysInMonth(selectedDate));
        onSelectDay(selectedDate);
        scrollToInitialIndex();
    }, [])

    const daysInMonth = (date) => {
        var begin = moment(date).format("YYYYMM01");
        var end = moment(date).format("YYYYMM") + moment(date).daysInMonth();
        let days = [];
        for (var m = moment(begin); m.isBefore(end); m.add(1, 'days')) {
            days.push(m.format('YYYYMMDD'));
        }
        days.push(end)
        return days;
    }

    const scrollToInitialIndex = () => {
        let day = Number(moment(selectedDate).format('DD'))-1;
        let index = day < 5 ? 0 : (day) ;
        setTimeout(() => {list.current.scrollToIndex({ index })}, 900);
    }
    //precisa ter o mesmo tamanho do item da lista do scrollToIndex funcionar!!!
    const getItemLayout = (data, index) => (
        { length: 75, offset: 75 * index, index }
    )

    const onSelectDay = (date) => {
        setSelectedDate(moment(date))
        props.onSelectDate(moment(date).format('YYYYMMDD'))
    }

    const renderDay = ({ item, index }) => {
        let selected = (moment(item).format('YYYYMMDD') == moment(selectedDate).format('YYYYMMDD'));
        return (
            <TouchableOpacity
                onPress={() => onSelectDay(item)}
                style={[styles.containerDay, selected ? styles.selected : ""]}
            >
                <Text style={[styles.textDD, selected ? styles.textSelected : ""]}> {moment(item).format('DD')}</Text>
                <Text style={[styles.textddd, selected ? styles.textSelected : "" ]}> {moment(item).format('ddd')}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerSelectedDay}>
                <FontAwesome5 name="calendar-day" size={24} color={Colors.contrast} />
                <Text style={ styles.selectedDay}>{moment(selectedDate).format('ddd, DD MMM')}</Text>
            </View>
            <View >
                <FlatList
                    ref={list}
                    horizontal
                    data={monthDays}
                    renderItem={renderDay}
                    keyExtractor={(item) => moment(item).format("DD")}
                    getItemLayout={getItemLayout}
                    showsHorizontalScrollIndicator={false}
                ></FlatList>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 10,
        backgroundColor: Colors.bg1,
    },
    containerSelectedDay: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    selectedDay: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.contrast,
        marginLeft: 10
    },  
    containerDay: {
        width: 75,
        height: 75,
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: Colors.contrast,
        borderRadius: 10,
        marginLeft: 10,
        padding: 6
    },
    selected: {
        backgroundColor: Colors.contrast                                                                                                                                                                                                                                                                                                                                                                                                              
    },
    textDD:{
        color:  Colors.contrast,
        fontWeight: 'bold',
        fontSize: 14
    },
    textddd:{
        color: Colors.contrast,
        textTransform: 'uppercase',
        fontSize: 12
    },
    textSelected: {
        color: '#FFF'
    }
})

export default CalendarLine;
import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, View, Text, TextInput, Pressable, Alert, Switch, SafeAreaView, ScrollView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ColorPalette from 'react-native-color-palette';
import { Divider } from '@rneui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';

const TaskModal = ({ modalVisible, setModalVisible }) => {
  const [selectedColor, setSelectedColor] = useState('#C0392B');
  const [lineEnabled, setLineEnabled] = useState(false)
  const [task, setTask] = useState('');
  const [allDayEnabled, setAllDayEnabled] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    console.log(currentDate);
    setStartDate(currentDate);
  };

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    console.log(currentDate);
    setEndDate(currentDate);
  };

  const toggleAllDaySwitch = () => setAllDayEnabled(previousState => !previousState);

  const toggleLineSwitch = () => setLineEnabled(previousState => !previousState);

  useEffect(() => {
    validateForm();
  }, [task]);

  validateForm = () => {
    let errors = {};
    if (!task) {
      errors.name = '標題是必須的！';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  }

  const addTodo = () => {
    if (isFormValid) {
      console.log('add success')
      setModalVisible(!modalVisible);
    } else {
      console.log('add failed')
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <View style={styles.row}>
                <TextInput
                  placeholder="標題"
                  style={styles.input}
                  value={task}
                  onChangeText={setTask}
                />
              </View>
              <Divider width={2} />
              <View style={styles.row}>
                <Text style={styles.label}>全天</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={allDayEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleAllDaySwitch}
                  value={allDayEnabled}
                  style={styles.switch}
                />
              </View>
              <SafeAreaView style={[styles.row, { margin: 6 }]}>
                <Text>開始</Text>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={startDate}
                  mode={'date'}
                  is24Hour={true}
                  display="compact"
                  onChange={onChangeStartDate}
                />
                {!allDayEnabled && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={startDate}
                    mode={'time'}
                    is24Hour={true}
                    display="compact"
                    onChange={onChangeStartDate}
                  />)}
              </SafeAreaView>
              <SafeAreaView style={[styles.row, { margin: 6 }]}>
                <Text>結束</Text>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={endDate}
                  mode={'date'}
                  is24Hour={true}
                  display="compact"
                  onChange={onChangeEndDate}
                />
                {!allDayEnabled && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={endDate}
                    mode={'time'}
                    is24Hour={true}
                    display="compact"
                    onChange={onChangeEndDate}
                  />)}
              </SafeAreaView>
              <ColorPalette
                onChange={color => setSelectedColor(color)}
                value={selectedColor}
                colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
                title={"標籤"}
                icon={<Text>✔</Text>}
              />
              <View style={styles.row}>
                <Text style={styles.label}>Line通知</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#7FFF00' }}
                  thumbColor='#f4f3f4'
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleLineSwitch}
                  value={lineEnabled}
                  style={styles.switch}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Pressable
                style={[styles.button, styles.buttonClose, { marginRight: 10 }]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>取消</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonAdd, { marginLeft: 10 }]}
                onPress={() => {
                  console.log('add');
                  addTodo();
                }}>
                <Text style={styles.textStyle}>新增</Text>
              </Pressable>
            </View>
            {Object.values(errors).map((error, index) => (
              <Text key={index} style={styles.error}>
                {error}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView >
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'gray',
  },
  buttonAdd: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  label: { marginRight: 10 },
  input: {
    width: 200,
    height: 50,
    fontSize: 20
  },
  checkbox: { size: 10, fillColor: 'blue', unfillColor: '#FFFFFF' },
  switch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }]
  },
});

export default TaskModal;

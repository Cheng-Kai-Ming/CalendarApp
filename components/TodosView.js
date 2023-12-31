import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import ColorPalette from 'react-native-color-palette'

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#C0392B');
  const [checked, setChecked] = useState(false)
  const [task, setTask] = useState('');

  const buttonStyle = isPressed ? { transform: [{ scale: 1.2 }] } : {};
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <View style={styles.row}>
                <Text style={styles.label}>Task:</Text>
                <TextInput
                  style={styles.input}
                  value={task}
                  onChangeText={setTask}
                />
              </View>
              <ColorPalette
                onChange={color => setSelectedColor(color)}
                value={selectedColor}
                colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
                title={"Task Color:"}
                icon={<Text>✔</Text>}
              />
              <View style={styles.row}>
                <Text style={styles.label}>Notify Users:</Text>
                <BouncyCheckbox
                  style={styles.checkbox}
                  onPress={checked => setChecked(!checked)}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Pressable
                style={[styles.button, styles.buttonClose, { marginRight: 10 }]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonAdd, { marginLeft: 10 }]}
                onPress={() => {
                  console.log('add');
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1 }}>
        <Pressable
          style={[buttonStyle, { position: 'absolute', left: 135, bottom: 10 }]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={() => setModalVisible(true)}>
          <FontAwesomeIcon icon={faCirclePlus} size={30} color="#2196F3" />
        </Pressable>
      </View>
    </View>
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
    height: 25,
    margin: 8,
    borderWidth: 1,
    padding: 5,
  },
  checkbox: { size: 10, fillColor: 'blue', unfillColor: '#FFFFFF' },
});

export default App;

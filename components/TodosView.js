import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import TodosModalView from './TodosModalView';


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const buttonStyle = isPressed ? { transform: [{ scale: 1.2 }] } : {};

  return (
    <View style={styles.centeredView}>
      <TodosModalView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
  }
});

export default App;

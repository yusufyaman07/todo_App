//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import styles from './style';
import Input from '../input';

// create a component
const EditModal = ({
  visible,
  closeModal,
  willEditText,
  setWillEditText,
  onConfirm,
  hasError,
  errorMessage,
}) => {
  return (
    <Modal visible={visible} transparent>
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalContentWrapper}>
          <Text style={styles.title}>Edit</Text>
          <Input
            placeholder="Edit"
            value={willEditText}
            onChangeText={text => setWillEditText(text)}
          />
          {hasError && (
            <Text style={styles.validationText}>{errorMessage} </Text>
          )}
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.closeButtonWrapper}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButonWrapper}
              onPress={onConfirm}>
              <Text style={styles.confirmButonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

//make this component available to the app
export default EditModal;

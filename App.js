import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhoneNumber = (number) => {
    if (number === '') return '';
    if (!/^[0-9]{10}$/.test(number)) return 'Số điện thoại không hợp lệ.';
    return '';
  };

  const handleChange = (text) => {
    setPhoneNumber(text);
    setErrorMessage(validatePhoneNumber(text));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Phần tiêu đề */}
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>

      {/* Phần nội dung */}
      <View style={styles.content}>
        <Text style={styles.subtitle}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <TextInput
          style={[styles.input, errorMessage ? styles.inputError : null]}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={handleChange}
          placeholderTextColor="#999"
        />

        {/* Hiển thị lỗi */}
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        {/* Nút tiếp tục */}
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: phoneNumber && !errorMessage ? '#007AFF' : '#E0E0E0' },
          ]}
          disabled={errorMessage !== '' || phoneNumber === ''}
          onPress={() => alert(`Số điện thoại của bạn là: ${phoneNumber}`)}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

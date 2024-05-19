import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    // Добавете логика за логин тук
    if (username === '' || password === '') {
      Alert.alert('Грешка', 'Моля, попълнете всички полета.');
      return;
    }
    Alert.alert('Успех', `Потребител: ${username}, Парола: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Потребителско име</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Въведете потребителско име"
      />
      <Text style={styles.label}>Парола</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Въведете парола"
        secureTextEntry
      />
      <Button title="Вход" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 35,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default LoginForm;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { loginUser, registerUser } from '../services/authService';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = async () => {
    setLoading(true);
    try {
      if (isLogin) {
        await loginUser(email, password);
      } else {
        await registerUser(email, password);
      }
      onLogin();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.gradientOverlay} />
        <StatusBar barStyle="dark-content" />
        
        <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>MedMind</Text>
          <Text style={styles.subtitle}>Your health companion</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#8E8E93"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#8E8E93"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity 
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.eyeIcon}>{showPassword ? 'HIDE' : 'SHOW'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity 
            style={[styles.button, loading && styles.buttonDisabled]} 
            onPress={handleAuth}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.switchButton}
            onPress={() => setIsLogin(!isLogin)}
          >
            <Text style={styles.switchText}>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <Text style={styles.switchTextBold}>
                {isLogin ? 'Sign Up' : 'Sign In'}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  gradientOverlay: {
    display: 'none',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
    color: '#3fa58e',
    letterSpacing: -2,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 17,
    color: '#6B7280',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 24,
    fontSize: 17,
    fontWeight: '500',
    color: '#111827',
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 24,
    paddingVertical: 20,
    paddingRight: 60,
    borderRadius: 24,
    fontSize: 17,
    fontWeight: '500',
    color: '#111827',
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  eyeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    padding: 4,
  },
  eyeIcon: {
    fontSize: 12,
    color: '#3fa58e',
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#3fa58e',
    paddingVertical: 20,
    borderRadius: 24,
    marginTop: 16,
    marginBottom: 32,
    shadowColor: '#3fa58e',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  switchButton: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  switchText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '500',
  },
  switchTextBold: {
    color: '#3fa58e',
    fontWeight: '700',
  },
});
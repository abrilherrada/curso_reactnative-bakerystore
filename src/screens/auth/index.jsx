import { useState, useReducer } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { Input } from '../../components';
import { THEME } from '../../constants/theme';
import { styles } from './styles';

import { signIn, signUp } from '../../store/actions';
import { UPDATE_FORM, onInputChange } from '../../utils/form';

const initialState = {
  email: { value: '', error: '', touched: false, hasError: true },
  password: { value: '', error: '', touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const title = login ? 'Iniciar sesión' : 'Registrarse';
  const message = login ? '¿No tenés una cuenta?' : '¿Ya tenés una cuenta?';
  const buttonMessage = login ? 'Iniciar sesión' : 'Registrarse';

  const onHandleSubmit = () => {
    dispatch(
      login
        ? signIn(formState.email.value, formState.password.value)
        : signUp(formState.email.value, formState.password.value)
    );
  };

  const onHandleInputChange = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="Ingresá tu correo electrónico"
          placeholderTextColor={THEME.colors.subtitle}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleInputChange(text, 'email')}
          value={formState.email.value}
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
          label="Correo electrónico"
          labelStyles={styles.label}
        />
        <Input
          placeholder="Ingresá tu contraseña"
          placeholderTextColor={THEME.colors.subtitle}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleInputChange(text, 'password')}
          value={formState.password.value}
          hasError={formState.password.hasError}
          error={formState.password.error}
          touched={formState.password.touched}
          label="Contraseña"
          labelStyles={styles.label}
        />
        <Button title={buttonMessage} color={THEME.colors.primary} onPress={onHandleSubmit} />
        <View style={styles.prompt}>
          <TouchableOpacity onPress={() => setLogin(!login)}>
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Auth;

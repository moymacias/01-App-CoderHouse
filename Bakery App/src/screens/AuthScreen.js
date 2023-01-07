import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native"
import React, { useCallback, useReducer, useEffect } from "react"

import { COLORS } from "../constants/colors"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { signUp } from "../store/actions/auth.actions"
import Input from "../components/Input"

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"

const formReducer = (state, action) => {
  console.log(action)
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    }
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    }
    let updatedFormIsValid = true
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    }
  }
  return state
}

const AuthScreen = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)

  useEffect(() => {
    if (error) {
      Alert.alert("A ocurrido un error", error, [{ text: "Ok" }])
    }
  }, [error])

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  })

  const handleSignUp = () => {
    //dispatch(signup(email, password))
    if (formState.formIsValid) {
      dispatch(
        signUp(formState.inputValues.email, formState.inputValues.password)
      )
    } else {
      Alert.alert("formulaio invalido", "Ingresa email y usuario valido", [
        { text: "ok" },
      ])
    }
  }

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      console.log(inputIdentifier, inputValue, inputValidity)
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      })
    },
    [dispatchFormState]
  )

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>TU PANADERIA: LOGIN</Text>
        <View>
          <Input
            id="email"
            label="Email"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Por favor ingrese un email valido"
            onInputChange={onInputChangeHandler}
            initialValue=""
          />
          <Input
            id="password"
            label="Password"
            keyboardType="default"
            required
            password
            secureTextEntry
            autoCapitalize="none"
            errorText="Por favor ingrese una contrasena valida"
            onInputChange={onInputChangeHandler}
            initialValue=""
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <Button
              //title={isSingUp ? "REGISTRARME" : "LOGIN"}
              title="Test"
              color={COLORS.primaryColor}
              onPress={handleSignUp}
            />
          </View>
          <View>
            <Button
              //title={`Cambiar a ${!isSingUp ? "Registrame" : "Login"}`}
              title="Test"
              color={COLORS.accentColor}
              //onPress={() => setIsSingUp((prevState) => !prevState)}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    //fontFamily: "open-sans-bold",
    marginBottom: 18,
  },
  container: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#fff",
    height: "50%",
    maxHeight: 400,
    padding: 12,
  },
  footer: {
    marginTop: 42,
  },
  button: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

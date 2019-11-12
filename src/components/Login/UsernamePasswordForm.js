import React, { useState, useEffect } from "react";
import styled from "styled-components";

import TextInput from "../Forms/Inputs/TextInput";
import BaseButton from "../Buttons/BaseButton";
import DidForgetPassword from "./DidForgotPassword";
import BackChip from "../Chips/BackChip";
import LoginFormTransition from "../../Animations/Transitions/LoginFormTransition";
import PasswordShowHideIndicator from "../Indicators/PasswordShowHideIndicator";
import { useFormStore } from "../../context/FormContext";
import useFormControls from "../../hooks/useFormControls";
import { useUserContext } from "../../context/UserContext";
import { useFireBase } from "../../components/Firebase/FirebaseContext";
import siteConfig from "../../utils/siteConfig";

const LoginUsernamePassword = ({
  reverse,
  setReverse,
  activeForm,
  setActiveForm,
  setIsLoggingIn,
  setShowDashboard
}) => {
  const auth = useFireBase();
  const [loginButtonValid, setLoginButtonValid] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [formState, dispatch] = useFormStore();
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext();
  const [updateInputValues, updateInputOptions] = useFormControls();

  // Check for form valid and set correct error message
  useEffect(() => {
    const emailValid = formState.emailValue.valid;
    const passwordValid = formState.passwordValue.valid;

    if (!emailValid) {
      setEmailErrorMessage("Please enter a valid email");
    }

    if (!passwordValid) {
      setPasswordErrorMessage("Must be over 6 characters");
    }

    if (emailValid && passwordValid) {
      setLoginButtonValid(true);
    }
  }, [formState.passwordValue.valid, formState.emailValue.valid]);

  const handleLoginSubmit = event => {
    event.preventDefault();
    setShowPassword(false);
    setIsLoggingIn(true);

    const email = formState.emailValue.value;
    const password = formState.passwordValue.value;

    const baseUrl = siteConfig.api.baseUrl;
    const url = `${baseUrl}/get-user`;
    let photoUrl;

    console.log("Logging user in...");
    auth
      .setUserPersistance()
      .then(() => {
        auth
          .loginUserWithEmailAndPassword(email, password)
          .then(userCredential => {
            auth.isAuthenticated = true;
            photoUrl = userCredential.user.photoURL;

            // ! Get fwwUser from local storage
            if (localStorage.getItem("fwwUser")) {
              console.log("fwwUser exists in local storage");
              const data = localStorage.getItem("fwwUser");
              const user = JSON.parse(data);

              dispatchUserAction({
                type: "setLoggedInUser",
                value: {
                  firstName: user.firstName,
                  photoUrl: user.photoUrl,
                  programs: user.programs
                }
              });

              // Empty the form state
              dispatch({ type: "resetEmailPasswordForm" });

              // Navigate to the Dashboard
              setShowDashboard(true);
            } else {
              console.log("fwwUser does not exist in local storage");

              userCredential.user.getIdToken(true).then(token => {
                fetch(url, {
                  method: "GET",
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                })
                  .then(response => response.json())
                  .then(userData => {
                    dispatchUserAction({
                      type: "setLoggedInUser",
                      value: {
                        firstName: userData.firstName,
                        photoUrl: photoUrl,
                        photoUrlTiny: userData.photoUrlTiny,
                        programs: userData.programs
                      }
                    });

                    // ! Setting up local Storage saving fwwUser
                    const fwwUser = {
                      firstName: userData.firstName,
                      photoUrl: photoUrl,
                      photoUrlTiny: userData.photoUrlTiny,
                      programs: userData.programs
                    };

                    localStorage.setItem("fwwUser", JSON.stringify(fwwUser));

                    // Empty the form state
                    dispatch({ type: "resetEmailPasswordForm" });

                    // Navigate to the Dashboard
                    setShowDashboard(true);
                  })
                  .catch(error => {
                    console.log("Could not set user", error);
                  });
              });
            }
          })
          .catch(error => {
            if (error.code === "auth/invalid-email") {
              // update error state and display to user
            } else if (error.code === "auth/user-disabled") {
              // update error state and display to user
            } else if (error.code === "auth/user-not-found") {
              // update error state and display to user
            } else if (error.code === "auth/wrong-password") {
              // update error state and display to user
              setPasswordErrorMessage("Wrong password. Try again");
            } else {
              // something crazy happened. Should never hit this.
            }
          });
      })
      .catch(error => {
        console.log("Could not set persistance", error.message);
      });
  };

  const handleBackButton = () => {
    setReverse(true);
    setActiveForm(prevValue => prevValue - 1);
  };

  const handleForgotPassword = () => {
    dispatch({ type: "resetUsernamePasswordForm" });
    setReverse(false);
    setActiveForm(prevValue => prevValue + 1);
  };

  const toggleShowPassword = () => {
    setShowPassword(prevValue => !prevValue);
  };

  return (
    <LoginFormTransition
      showNode={activeForm === 1}
      reverse={reverse}
      formName="EmailPasswordForm"
    >
      <FormContainer>
        <BackChip handleClick={handleBackButton}>Back</BackChip>
        <PasswordShowHideIndicator
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <LoginForm onSubmit={handleLoginSubmit}>
          <TextInput
            type="text"
            name="emailAddress"
            labelName="Email"
            labelFor="emailAddress"
            labelInstructions="Enter your email address"
            labelError={emailErrorMessage}
            value={formState.emailValue.value}
            valid={formState.emailValue.valid}
            initial={formState.emailOptions.initial}
            touched={formState.emailOptions.touched}
            showInstructions={formState.emailOptions.showInstructions}
            onChange={updateInputValues}
            onFocus={updateInputOptions}
            onBlur={updateInputOptions}
          />
          <TextInput
            type={showPassword ? "text" : "password"}
            name="loginPassword"
            labelName="Password"
            labelFor="loginPassword"
            labelInstructions="Enter your password"
            labelError={passwordErrorMessage}
            value={formState.passwordValue.value}
            valid={formState.passwordValue.valid}
            initial={formState.passwordOptions.initial}
            touched={formState.passwordOptions.touched}
            showInstructions={formState.passwordOptions.showInstructions}
            onChange={updateInputValues}
            onFocus={updateInputOptions}
            onBlur={updateInputOptions}
          />
          <BaseButton disabled={!loginButtonValid} type="submit">
            {loginButtonValid ? "Login" : "Enter Your Info"}
          </BaseButton>
        </LoginForm>
        <DidForgetPassword handleClick={handleForgotPassword} />
      </FormContainer>
    </LoginFormTransition>
  );
};

export default LoginUsernamePassword;

const FormContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LoginForm = styled.form`
  margin: 20px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 20px;
  justify-items: center;
  width: 100%;
`;

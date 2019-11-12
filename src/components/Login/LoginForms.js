import React, { useState } from "react";
import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";

import ChooseLoginMethod from "./ChooseLoginMethod";
import UsernamePasswordForm from "./UsernamePasswordForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

const LoginForms = ({
  setIsLoggingIn,
  setShowDashboard,
  setLoadingMessage
}) => {
  const [reverse, setReverse] = useState(false);
  const [activeForm, setActiveForm] = useState(0);

  return (
    <FormWrapper>
      <TransitionGroup component={null}>
        <ChooseLoginMethod
          activeForm={activeForm}
          setActiveForm={setActiveForm}
          setReverse={setReverse}
          setShowDashboard={setShowDashboard}
          setIsLoggingIn={setIsLoggingIn}
          setLoadingMessage={setLoadingMessage}
        />
        <UsernamePasswordForm
          reverse={reverse}
          setReverse={setReverse}
          activeForm={activeForm}
          setActiveForm={setActiveForm}
          setIsLoggingIn={setIsLoggingIn}
          setShowDashboard={setShowDashboard}
        />
        <ForgotPasswordForm
          reverse={reverse}
          setReverse={setReverse}
          activeForm={activeForm}
          setActiveForm={setActiveForm}
        />
      </TransitionGroup>
    </FormWrapper>
  );
};

export default LoginForms;

const FormWrapper = styled.div`
  position: relative;
  width: 100%;
`;

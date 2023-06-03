import React, {useState} from 'react';
import TitleAndSubtitle from '../components/text/TitleAndSubtitle';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import EmailLoginForm from '../components/registration/EmailLoginForm';
import BaseButton from '../components/buttons/BaseButton';

const SignIn = () => {
  const [signedIn, setSignedIn] = useState(false);
  const handlePress = () => {
    setSignedIn(!signedIn);
  };

  return (
    <ContentWrapper>
      {signedIn ? (
        <>
          <TitleAndSubtitle
            title="Success!"
            subtitle="Press the button to go back to the login form"
          />
          <BaseButton
            variant={'primary'}
            text="Back"
            accessibilityLabel="Go back"
            onPress={handlePress}
          />
        </>
      ) : (
        <>
          <TitleAndSubtitle
            title="Let's get started"
            subtitle="We're happy to see you again. Enter your email address and password"
          />
          <EmailLoginForm onSubmit={handlePress} />
        </>
      )}
    </ContentWrapper>
  );
};

export default SignIn;

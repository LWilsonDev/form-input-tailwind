import React, {FC} from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {KeyboardAvoidingView, View} from 'react-native';

import BaseButton from '../buttons/BaseButton';
import EmailInput from '../forms/inputs/specific/EmailInput';
import PasswordInput from '../forms/inputs/specific/PasswordInput';
import tw from '../../lib/tailwind';

type FormValues = {
  email: string;
  password: string;
};

interface EmailLoginFormProps {
  onSubmit: (values: FormValues) => void;
}

const EmailLoginForm: FC<EmailLoginFormProps> = ({onSubmit}) => {
  const {...methods} = useForm({defaultValues: {email: '', password: ''}});

  const handleSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    onSubmit(data);
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log(errors);
  };

  return (
    <KeyboardAvoidingView>
      <FormProvider {...methods}>
        <View style={tw`mt-4 mb-4`}>
          <EmailInput
            name="email"
            label="Email address"
            rules={{required: 'Email is required'}}
            onSubmitEditing={() => methods.setFocus('password')}
            returnKeyType={'done'}
            error={methods.formState.errors.email?.message}
          />
        </View>
        <View style={tw`mb-4 mt-2`}>
          <PasswordInput
            name="password"
            label="Password"
            rules={{required: 'Password is required'}}
            returnKeyType={'done'}
            onSubmitEditing={methods.handleSubmit(handleSubmit, onError)}
            error={methods.formState.errors.password?.message}
          />
        </View>
        <View>
          <BaseButton
            variant="primary"
            text="Login"
            onPress={methods.handleSubmit(onSubmit, onError)}
          />
        </View>
      </FormProvider>
    </KeyboardAvoidingView>
  );
};

export default EmailLoginForm;

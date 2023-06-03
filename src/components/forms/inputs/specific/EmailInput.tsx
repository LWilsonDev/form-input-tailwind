import React, {FC} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import BaseInput, {BaseInputProps} from '../BaseInput';
import tw from '../../../../lib/tailwind';

interface EmailInputProps extends Omit<BaseInputProps, 'icon'> {}

const EmailInput: FC<EmailInputProps> = ({...props}) => {
  const iconColor = tw.color('gray-300');

  const emailIcon = (
    <MaterialCommunityIcons
      name="account-box-outline"
      accessible={false} // we don't want the icon to be picked up by screen readers
      size={32}
      color={iconColor}
    />
  );

  return (
    <BaseInput
      {...props}
      leftSideContent={emailIcon}
      placeholder={'Email address'}
      keyboardType="email-address"
      numberOfLines={1}
      accessibilityLabel="Enter your email Address"
    />
  );
};

export default EmailInput;

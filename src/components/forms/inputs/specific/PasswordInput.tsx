import React, {FC, useState} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import BaseInput, {BaseInputProps} from '../BaseInput';
import IconButton from '../../../buttons/IconButton';
import tw from '../../../../lib/tailwind';

interface PasswordInputProps extends Omit<BaseInputProps, 'icon'> {}

const PasswordInput: FC<PasswordInputProps> = ({...props}) => {
  const [showPassword, setShowPassword] = useState(false);

  const iconColor = tw.color('gray-300');

  const icon = (
    <MaterialCommunityIcons
      name="account-key-outline"
      accessible={false} // we don't want the icon to be picked up by screen readers
      size={32}
      color={iconColor}
    />
  );

  const handleShowPassword = () => setShowPassword(!showPassword);

  const rightSideContent = (
    <IconButton
      onPress={handleShowPassword}
      accessibilityLabel={showPassword ? 'hide password' : 'show password'}
      icon={
        <MaterialCommunityIcons
          accessible={false} // we don't want the icon to be picked up by screen readers, the button is labelled
          name={showPassword ? 'eye-off' : 'eye'}
          size={32}
          color={iconColor}
        />
      }
    />
  );

  return (
    <BaseInput
      {...props}
      leftSideContent={icon}
      placeholder={'Password'}
      rightSideContent={rightSideContent}
      secureTextEntry={!showPassword}
      numberOfLines={1}
      accessibilityLabel="Enter your password"
    />
  );
};

export default PasswordInput;

import {Pressable, PressableProps, Text} from 'react-native';
import React, {FC} from 'react';
import tw from '../../lib/tailwind';

interface IconButtonProps extends PressableProps {
  icon: React.ReactNode;
  label?: string;
  buttonTWStyle?: string;
  labelTWStyle?: string;
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  label,
  buttonTWStyle,
  labelTWStyle,
  ...props
}) => {
  return (
    <Pressable
      accessibilityRole="button"
      style={({pressed}) => [
        tw` justify-center items-center ${buttonTWStyle ?? ''}`,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      {...props}
    >
      {icon}
      {label ? (
        <Text
          style={tw`text-sm text-gray-600 justify-center pt-2 ${
            labelTWStyle ?? ''
          }`}
        >
          {label}
        </Text>
      ) : null}
    </Pressable>
  );
};

export default IconButton;

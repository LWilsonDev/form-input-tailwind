import {Pressable, PressableProps, Text} from 'react-native';
import React, {FC} from 'react';
import tw from '../../lib/tailwind';

interface BaseButtonProps extends PressableProps {
  text: string;
  variant: 'primary' | 'secondary';
  twStyles?: string;
}

const BaseButton: FC<BaseButtonProps> = ({
  text,
  variant,
  twStyles,
  ...props
}) => {
  const baseStyles = tw.style(
    `rounded-5 border border-green-600 items-center px-2 py-5 flex-grow ${
      twStyles ?? ''
    }`,
    {
      'bg-green-600': variant === 'primary',
      'bg-white': variant === 'secondary',
    }
  );

  const textStyles = tw.style('text-base font-semibold', {
    'text-white': variant === 'primary',
    'text-green-600': variant === 'secondary',
  });

  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        baseStyles,
      ]}
    >
      <Text style={textStyles}>{text}</Text>
    </Pressable>
  );
};

export default BaseButton;

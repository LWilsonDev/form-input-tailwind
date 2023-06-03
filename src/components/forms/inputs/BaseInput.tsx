import {
  TextInput,
  View,
  Text,
  TextInputProps,
  LayoutChangeEvent,
} from 'react-native';
import React, {FC, useState} from 'react';
import tw from 'twrnc';
import {useController, UseControllerProps} from 'react-hook-form';

export interface BaseInputProps
  extends Omit<TextInputProps, 'defaultValue'>,
    UseControllerProps {
  name: string;
  label: string;
  leftSideContent?: React.ReactNode;
  defaultValue?: string;
  rightSideContent?: React.ReactNode;
  error?: string;
}

const BaseInput: FC<BaseInputProps> = ({
  leftSideContent,
  rightSideContent,
  error,
  label,
  ...props
}) => {
  const {name, rules, defaultValue} = props;
  const [focused, setFocused] = useState(false);
  const [inputHeight, setInputHeight] = useState(0);

  const {field} = useController({name, rules, defaultValue});

  const wrapStyles = tw.style(`flex-row border  rounded-xl p-2.5`, {
    'border-green-600': focused && !error,
    'border-red-600': !!error,
    'border-gray-300': !focused && !error,
  });
  const labelStyles = tw.style(`text-sm`, {
    'text-green-600': focused && !error,
    'text-red-600': !!error,
    'text-gray-300': !focused && !error,
  });
  const placeholderColor = tw.color('gray-400');

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
    field.onBlur();
  };

  const measureInput = (e: LayoutChangeEvent) => {
    const height = e.nativeEvent.layout.height;
    if (inputHeight !== height) {
      setInputHeight(e.nativeEvent.layout.height);
    }
  };

  const translateValue = inputHeight / 2;

  return (
    <>
      {focused ? (
        <View
          style={[
            tw`bg-white mt-1 pl-1 pr-1 ml-3 z-1 absolute`,
            {transform: [{translateY: -translateValue}]},
          ]}
        >
          <Text style={[labelStyles]}>{label}</Text>
        </View>
      ) : null}

      <View style={wrapStyles}>
        {leftSideContent ? (
          <View style={tw`pr-2.5 justify-center`}>{leftSideContent}</View>
        ) : null}
        <TextInput
          {...props}
          onLayout={measureInput}
          onChangeText={field.onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={field.value}
          style={tw`text-base pb-2 pr-1 flex-1 text-gray-900`}
          placeholderTextColor={placeholderColor}
        />
        {rightSideContent ? (
          <View style={tw`pl-2 justify-center`}>{rightSideContent}</View>
        ) : null}
      </View>
      {error ? (
        <Text style={tw`text-red-600 text-base self-center pt-2 font-light`}>
          {error}
        </Text>
      ) : null}
    </>
  );
};

export default BaseInput;

import {SafeAreaView} from 'react-native';
import React, {FC} from 'react';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import tw from '../../lib/tailwind';

interface ContentWrapperProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

const ContentWrapper: FC<ContentWrapperProps> = ({
  children,
  scrollable = true,
}) => {
  const wrapStyle = tw.style(`mx-4 flex-1`);

  return !scrollable ? (
    <SafeAreaView style={wrapStyle}>{children}</SafeAreaView>
  ) : (
    <KeyboardAwareScrollView style={wrapStyle}>
      <SafeAreaView>{children}</SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default ContentWrapper;

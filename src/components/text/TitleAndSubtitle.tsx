import {Text, View} from 'react-native';
import React, {FC} from 'react';
import tw from '../../lib/tailwind';

interface TitleAndSubtitleProps {
  title: string;
  subtitle: string;
  centered?: boolean; // default to false
}

/**A reoccurring pattern in the app is to have a bold title, with smaller text underneath
 * This component allows for this to be easily reused without styling each time
 */
const TitleAndSubtitle: FC<TitleAndSubtitleProps> = ({
  title,
  subtitle,
  centered = false,
}) => {
  const alignment = centered ? 'center' : 'left';

  return (
    <View style={tw`text-${alignment} pt-3 pb-2`}>
      <Text style={tw`font-semibold text-2xl mb-3 text-gray-900`}>{title}</Text>
      <Text style={tw`text-base font-light text-gray-600`}>{subtitle}</Text>
    </View>
  );
};

export default TitleAndSubtitle;

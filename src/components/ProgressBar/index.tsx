import { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Animated, {
  BounceIn,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

import { styles } from './styles';

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity)

type ProgressBarProps = {
  value: number
  onMoveToTop: () => void
}

export function ProgressBar({ value, onMoveToTop }: ProgressBarProps) {
  const widthContainer = useSharedValue(200)

  const endReached = value >= 95

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value
    }
  })

  useEffect(() => {
    widthContainer.value = withSpring(endReached ? 56 : 200, {
      mass: 0.4
    })
  }, [value])

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {endReached ? (
        <TouchableOpacityAnimated
          entering={BounceIn}
          exiting={FadeOut}
          onPress={onMoveToTop}
        >
          <Feather name='arrow-up' size={24} color='#C4C4CC' />
        </TouchableOpacityAnimated>
      ) : (
        <Animated.View
          style={styles.progressContent}
          entering={FadeIn}
        >
          <Text style={styles.value}>
            {value}%
          </Text>

          <View style={styles.tracker}>
            <View style={[styles.progress, { width: `${value}%` }]} />
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
}

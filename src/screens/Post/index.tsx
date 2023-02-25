import { useState, useRef } from 'react';
import {
  ScrollView,
  Text,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native';

import { ProgressBar } from '../../components/ProgressBar';

import { styles } from './styles';

export function Post() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const scrollRef = useRef<ScrollView>(null)

  function handleScrollPercentage(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const { contentSize, contentOffset, layoutMeasurement } = event.nativeEvent

    if(contentOffset.y <= 0) {
      return setScrollPercentage(0)
    }

    const amountScreenScrolled = layoutMeasurement.height + contentOffset.y
    const screenScrolledPercentage = (amountScreenScrolled / contentSize.height) * 100

    setScrollPercentage(Math.ceil(screenScrolledPercentage))
  }

  function handleScrollMoveToTop() {
    if(!scrollRef.current) {
      return
    }

    scrollRef.current.scrollTo({
      x: 0,
      y: 0,
      animated: true
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        scrollEventThrottle={16}
        onScroll={handleScrollPercentage}
      >
        <Text style={styles.title}>
          Lorem ipsum
        </Text>

        <View>
          <Text style={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
          </Text>

          <Text style={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
          </Text>

          <Text style={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
          </Text>

          <Text style={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam mollitia consequatur molestiae! Impedit harum molestias nihil maxime neque ab rerum architecto id enim adipisci. Ut ratione molestiae illo id!
          </Text>
        </View>
      </ScrollView>

      <ProgressBar
        value={scrollPercentage}
        onMoveToTop={handleScrollMoveToTop}
      />
    </View>
  );
}

import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Overall, React is pretty cool. I appreciate how it builds upon
        JavaScript, combines content with interactivity, and emphasizes
        separation of concerns. It’ll take some time getting used to it, an
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;

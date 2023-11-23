import { Pressable } from 'react-native';

import { styles } from './styles';

export function Button({ children, disabled, ...props }) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonActive,
          disabled && styles.buttonDisabled,
        ]}
        android_ripple={{ color: '#444' }}
        {...props}
      >
        <Text style={[
          styles.buttonLabel,
          disabled && styles.buttonLabelDisabled
        ]}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
}

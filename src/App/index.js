import { Button } from '../components/Button';

import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <Button onPress={() => alert('Ok')}>
          Hello Button
        </Button>
      </ScrollView>
    </SafeAreaView>
  )
}

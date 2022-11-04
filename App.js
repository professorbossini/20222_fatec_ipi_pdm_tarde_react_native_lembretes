import {
  Button, 
  StyleSheet, 
  TextInput, 
  View 
} from 'react-native';
//hook
import { useState } from 'react'

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const capturarLembrete = (lembreteDigitado) => {
    console.log(lembreteDigitado)
  }

  const adicionarLembrete = () => {
    console.log(lembrete)
  } 
  // single source of truth SSOT
  return (
    <View style={styles.container}>
      <View>
        <TextInput 
          placeholder='Lembrar...'
          style={styles.lembreteTextInput}
          // onChangeText={capturarLembrete}
          //lição de casa para o Fernando...
          // onChange={(e) => capturarLembrete(e.target.value)}
          // value={lembrete}
        />          
        <Button 
          title='Adicionar'
          onPress={adicionarLembrete}
        />
      </View>
      <View>

      </View>      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  lembreteTextInput: {
    borderBottomColor: '#CCC', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 12
  }
});

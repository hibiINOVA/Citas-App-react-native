<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';

export default function App() {
=======
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  Modal,
  TextInput,
  View
} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombrePaciente, setNombrePaciente] = useState('');

>>>>>>> Stashed changes
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

<<<<<<< Updated upstream
      <Pressable style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
=======
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Paciente</Text>
          <TextInput
            style={styles.input}
            placeholder='Nombre paciente'
            placeholderTextColor={'#666'}
            value={nombrePaciente}
            onChangeText={setNombrePaciente}
            maxLength={20}
            multiline={true}
            numberOfLines={4}
            keyboardType='email-address'
          />
        </View>

        <Pressable
          onPress={() => setModalVisible(false)}
          style={styles.btnNuevaCita}
        >
          <Text style={styles.btnTextoNuevaCita}>
            Cerrar Modal
          </Text>
        </Pressable>
      </Modal>

      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTextoNuevaCita}>
          Nueva Cita
        </Text>
>>>>>>> Stashed changes
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
<<<<<<< Updated upstream
    textTransform: 'uppercase'
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
=======
    textTransform: 'uppercase',
  },
>>>>>>> Stashed changes
});
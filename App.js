import { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  Modal
} from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Administrador de Citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Modal
        visible={modalVisible}
        animationType='slide'
      >
        <Text style={styles.modalText}>Este es un Modal</Text>
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
        style ={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextoNuevaCita}>
          Nueva Cita
        </Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },

  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
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
    borderRadius: 10
  },

  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});
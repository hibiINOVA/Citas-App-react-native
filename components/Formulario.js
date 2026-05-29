import { View, Text, Modal, SafeAreaView, Pressable, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-web'

const Formulario = () => {
    const [id, setId] = useState("")
    const [paciente, setPaciente] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")
  return (
    <Modal>
        <SafeAreaView>
            <ScrollView>
                <Text>Nueva Cita</Text>

                <Pressable>
                    <Text>X cancelar</Text>
                </Pressable>

                <View>
                    <Text>Nombre del paciente</Text>
                    <TextInput/>
                </View>

                <Pressable>
                    <Text>Guardar</Text>
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    </Modal>
  )
}

const style = StyleSheet.create({
    campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#1a0052',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  formulario: {
    backgroundColor: '#6d28d9',
    flex: 1,
  },
})

export default Formulario
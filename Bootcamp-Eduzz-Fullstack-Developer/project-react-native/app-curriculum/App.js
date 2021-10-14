import React from 'react';
import { Text, Image, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import photo from './src/assets/photo.jpg';
import Card from './src/components/Card';

const App = () => {

  const handleSocialNetwork = (social_networks) => {

    switch(social_networks) {

      case 'github':
        Alert.alert('Este é meu GitHub', 'https://github.com/FelipeStella')
      break

      case 'linkedin':
        Alert.alert('Este é meu Linkedin', 'https://www.linkedin.com/in/felipe-da-silva-stella-547897a7/')
      break
    }
  }

  return (
    <>
      <View style={styles.page}>

        <View style={styles.header_container}>
          <Image source={photo} style={styles.photoProfile}/>
          <Text style={styles.name}>Felipe da Silva Stella</Text>
          <Text style={styles.occupacion}>Desenvolvedor FullSack</Text>
          <View style={styles.social_networks}>
            <TouchableOpacity onPress={() => handleSocialNetwork('linkedin')}>
              <Icon name="linkedin" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialNetwork('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card 
        title='Skills desenvolvidas' 
        description='Entendimento do funcionamento do ciclo de vida em React; 
        Desenvolvimento orientado a Testes unitários TDD; propTypes em javascript;
        inicialização de projetos em React e React Native, 
        estrutura de pastas dos projetos'
        />
        
        <Card
        title='Cursos realizados' 
        description='Criando aplicações móveis multiplataforma com React Native'
        />

      </View>
    </>
  )
  
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#41356b',
    flex: 1,
    alignItems: 'center'
  },

  photoProfile: {
    width: 200,
    height: 200,
    borderRadius: 60,
    marginBottom: 20
  },

  header_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },

  name: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },

  occupacion: {
    color: '#04d361',
    marginBottom: 20
  },

  social_networks: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '20%',
    marginBottom: 40
  }

})




export default App

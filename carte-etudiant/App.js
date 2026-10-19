import React from 'react'; 

import { Image, StyleSheet, Text, View } from 'react-native'; 

export default function App() { 

  return ( 

    <View style={styles.container}> 

      {/* Header : logo + nom de l'école */} 

      <View style={styles.header}> 

        <Image 

          source={require('./assets/emsi.png')} 

          style={styles.logo} 

          resizeMode="contain" 

        /> 

        <Text style={styles.schoolName}>EMSI ANFA</Text> 

      </View> 

      {/* Bloc info étudiant */} 

      <View style={styles.info}> 

        <Text style={styles.label}> 

          Nom : <Text style={styles.value}>MERCIER</Text> 

        </Text> 

        <Text style={styles.label}> 

          Prénom : <Text style={styles.value}>NOÉ</Text> 

        </Text> 

        <Text style={styles.label}> 

          Année universitaire : <Text style={styles.value}>2026 / 2027</Text> 

        </Text> 

      </View> 

    </View> 

  ); 

} 

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    justifyContent: 'center', 

    alignItems: 'center', 

    backgroundColor: '#f6f7fb', 

  }, 

  header: { 

    flexDirection: 'row',       // logo + texte alignés horizontalement 

    justifyContent: 'space-around', 

    alignItems: 'center', 

    marginBottom: 30,           // espace entre header et infos 

  }, 

  logo: { 

    width: 200, 

    height: 200, 

  }, 

  schoolName: { 

    fontSize: 22, 

    fontWeight: 'bold', 

    color: '#1f2937', 

    marginLeft: 20,             // espace entre logo et texte 

  }, 

  info: { 

    paddingHorizontal: 20, 

  }, 

  label: { 

    fontSize: 18, 

    fontWeight: 'bold', 

    color: '#1f2937', 

    marginBottom: 5, 

  }, 

  value: { 

    fontWeight: 'normal', 

    color: '#4b5563', 

  }, 

}); 
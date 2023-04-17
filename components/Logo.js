import { View, Image, StyleSheet } from 'react-native';
import logo from '../assets/star1.png';
import title from '../assets/spu.png';

function Logo () {
  return (
    <View style={{ }}>
      <Image source={logo} style={styles.logo} />
      <Image source={title} style={styles.title} />
    </View>
  )
}

export default Logo;

const styles = StyleSheet.create({
  logo_container: {
    marginTop: 100,
    borderWidth: 1
  },
  logo: { 
    alignSelf:"center", 
    resizeMode: 'contain', 
    height: 160, 
    width: 160,
  },
  title: { 
    alignSelf:"center", 
    resizeMode: 'contain', 
    height: 100, 
    width: 100,
    marginTop: -10
  },
});
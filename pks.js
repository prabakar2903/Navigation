import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function Pks({navigation}) {
  return (
    <View style={styles.flex1}>
      <Text style={{fontSize:40 }}>Good morning</Text>
      <Button title='submit' style={{color:'red'}}  onPress={()=>navigation.navigate ('Try')} />
    <Image source = {{uri:'https://assets.bcci.tv/bcci/photos/1045/12baa551-6da4-4636-b6d9-4c395a702816.jpg'}}
   style = {{ width: 800, height: 400 }}
   />
    </View>
  );
}
const styles = StyleSheet.create({
  flex1:{
      alignItems:"center",

        },
});

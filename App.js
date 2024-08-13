import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput style = {styles.textInput} placeholder="Your course goals" />
        <Button title="Add Goals" />
      </View>

      <View>
        <Text> Your goal list here..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: 'auto',
    marginRight: 8,
    padding: 8
  }
});

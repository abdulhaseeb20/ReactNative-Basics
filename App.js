import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";



export default function App() {

const [enteredGoalText, setEnteredGoalText] = useState('');
const [courseGoals, setCourseGoals] = useState([]);

function goalInputHandler(enteredText) 
{
  setEnteredGoalText(enteredText);
}

function addGoalhandler() 
{
  setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
}

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput} placeholder="Your course goals" onChangeText={goalInputHandler}
        />
        <Button title="Add Goals" onPress={addGoalhandler}/>
      </View>

      <View style={styles.golasContainer}>
        {courseGoals.map((goal) => <Text key={goal}>{goal} </Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  golasContainer: {
    flex: 4,
  },
});

import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={props.onDeleteItem.bind(this, props.id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}> {props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

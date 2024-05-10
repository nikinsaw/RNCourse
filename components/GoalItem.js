import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) =>
          Platform.OS === "ios" && pressed && styles.pressedStyle
        }
        android_ripple={{ color: "#5E0aFF" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc"
  },
  goalText: {
    padding: 8,
    color: "white"
  },
  pressedStyle: {
    borderRadius: 6,
    backgroundColor: "#5E0aFF"
  }
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NewIncident from "./src/features/new-incident";

export default function App() {
  return (
    <NewIncident />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#fff",
  },
  leftContainer: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  midContainer: {
    flex: 2,
    backgroundColor: 'red',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: '#aaa',
  },
});
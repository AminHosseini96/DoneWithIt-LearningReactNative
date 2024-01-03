import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View style={styles.detailsContainer}>
      <Image style={styles.image} source={require("../assets/pp2.jpg")} />
      <AppText style={styles.title}>Mirror for sale</AppText>
      <AppText style={styles.price}>100$</AppText>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/p4.jpg")}
          title="Amin Hosseini"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;

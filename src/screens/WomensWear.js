import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { colors } from "../constants/cnst";

class WomensWear extends Component {
  state = {
    clothing_types: [
      {
        id: "1",
        title: "Shirts",
        image:
          "https://cdn1.iconfinder.com/data/icons/outline-women-s-clothing/32/woman_fashion_clothes_shirt-1024.png",
      },
      {
        id: "2",
        title: "Sweatshirts",
        image:
          "https://cdn0.iconfinder.com/data/icons/uniform-4/64/Hood-Sweatshirt-Sweater-Clothing-Jacket-1024.png",
      },
      {
        id: "3",
        title: "Pants",
        image:
          "https://cdn4.iconfinder.com/data/icons/women-s-fashion-1/64/trousers-1024.png",
      },
      {
        id: "4",
        title: "Shorts",
        image:
          "https://cdn1.iconfinder.com/data/icons/outline-women-s-clothing/32/woman_fashion_clothes_shorts_drawers-1024.png",
      },
      {
        id: "5",
        title: "Outerwear",
        image:
          "https://cdn0.iconfinder.com/data/icons/online-clothes-shopping-set/128/iStar_Design_Online_Shopping_LineIcons_Live-23-1024.png",
      },
      {
        id: "6",
        title: "Footwear",
        image:
          "https://cdn0.iconfinder.com/data/icons/online-clothes-shopping-set/128/iStar_Design_Online_Shopping_LineIcons_Live-94-1024.png",
      },
    ],
  };

  renderItemsFunction = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          this.props.navigation.navigate("CategoriesProducts", {
            title: itemData.item.title,
          });
        }}
      >
        <View>
          <Image
            source={{ uri: itemData.item.image }}
            style={{ width: 90, height: 90 }}
          />
        </View>
        <Text style={styles.text} numberOfLines={2}>
          {" "}
          {itemData.item.title}{" "}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.main}>
        <Button
          title="go back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <FlatList
          style={{ marginTop: 5 }}
          data={this.state.clothing_types}
          numColumns={2}
          renderItem={this.renderItemsFunction}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 5,
    backgroundColor: colors.green,
  },
  item: {
    flex: 1,
    height: 180,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: "halfmoon_bold",
    alignContent: "flex-end",
    marginTop: 10,
  },
});
export default WomensWear;

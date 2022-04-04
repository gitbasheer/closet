import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

class CategoriesScreen extends Component {
  state = {
    categories: [
      {
        id: "1",
        title: "Merch",
        image:
          "https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/t-shirt-1024.png",
      },
      {
        id: "2",
        title: "Customers",
        image:
          "https://cdn2.iconfinder.com/data/icons/lightly-icons/30/group-480.png",
      },
      {
        id: "3",
        title: "Sales",
        image:
          "https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-45-1024.png",
      },
      {
        id: "4",
        title: "Profile",
        image:
          "https://cdn2.iconfinder.com/data/icons/e-commerce-278/512/wish-list-web-shopping-ecommerce-1024.png",
      },
      {
        id: "5",
        title: "Locations",
        image:
          "https://cdn4.iconfinder.com/data/icons/web-essentials-6/24/location-1024.png",
      },
      {
        id: "6",
        title: "Settings",
        image:
          "https://cdn1.iconfinder.com/data/icons/photo-editor-3/24/i24_other_settings-1024.png",
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
        <FlatList
          style={{ marginTop: 5 }}
          data={this.state.categories}
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
    backgroundColor: "#f5f5f0",
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

export default CategoriesScreen;

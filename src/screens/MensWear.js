import React, {Component} from "react";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { colors } from "../constants/cnst";

class MensWear extends Component {
    state = {
    clothing_types: [
    {
        id: "1",
        title: "Shirts",
        image: "https://cdn1.iconfinder.com/data/icons/cloth-4/512/polo-shirt-shirts-fashion-clothing-1024.png",
    },
    {
        id: "2",
        title: "Sweatshirts",
        image: "https://cdn4.iconfinder.com/data/icons/clothes-192/64/ZIP_HOODY-hoodie-sweatshirt-zipper-clothing-1024.png",
    },
    {
        id: "3",
        title: "Pants",
        image: "https://cdn2.iconfinder.com/data/icons/men-clothes/512/men-clothes-fashion-19-1024.png",
    },
    {
      id: "4",
      title: "Shorts",
      image: "https://cdn3.iconfinder.com/data/icons/clothes-outline-7/340/wear_clothing_clothes_shorts_shorts_pants_style-1024.png",
    },
    {
      id: "5",
      title: "Outerwear",
      image: "https://cdn2.iconfinder.com/data/icons/men-clothes/512/men-clothes-fashion-18-1024.png",
    },
    {
      id: "6",
      title: "Footwear",
      image: "https://cdn1.iconfinder.com/data/icons/skate-1/512/shoes-sneaker-shoe-footwear-fashion-1024.png",
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
export default MensWear;
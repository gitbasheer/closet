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

class WomensShirts extends Component {
    state = {
    clothing_types: [
    {
        id: "1",
        title: "Shirts1",
        image: "https://n.nordstrommedia.com/id/sr3/8806b49c-da94-4e48-9131-47e33079e98b.jpeg?h=365&w=240&dpr=2",
        price: "15.99",
    },
    {
        id: "2",
        title: "Shirts2",
        image: "https://n.nordstrommedia.com/id/sr3/8806b49c-da94-4e48-9131-47e33079e98b.jpeg?h=365&w=240&dpr=2",
        price: "25.99",
    },
    {
        id: "3",
        title: "Shirts3",
        image: "https://n.nordstrommedia.com/id/sr3/8806b49c-da94-4e48-9131-47e33079e98b.jpeg?h=365&w=240&dpr=2",
        price: "10.99",
    },
    {
      id: "4",
      title: "Shirts4",
      image: "https://n.nordstrommedia.com/id/sr3/8806b49c-da94-4e48-9131-47e33079e98b.jpeg?h=365&w=240&dpr=2",
      price: "17.99",
    },
    {
      id: "5",
      title: "Shirts5",
      image: "https://n.nordstrommedia.com/id/sr3/8806b49c-da94-4e48-9131-47e33079e98b.jpeg?h=365&w=240&dpr=2",
      price: "13.99",
    },
    {
      id: "6",
      title: "Shirts6",
      image: "https://n.nordstrommedia.com/id/sr3/8806b49c-da94-4e48-9131-47e33079e98b.jpeg?h=365&w=240&dpr=2",
      price: "18.99",
    },
    ],
    };
    renderItemsFunction = (itemData) => {
        return (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              this.props.navigation.navigate("ShirtsProducts", {
                title: itemData.item.title,
              });
            }}
          >
            <View>
              <Image
                source={{ uri: itemData.item.image }}
                style={{ width: 410, height: 410 }}
              />
            </View>
            <Text style={styles.text} numberOfLines={2}>
              {" "}
              {itemData.item.title}{" "}
            </Text>
            <Text style={styles.text} numberOfLines={2}>
              {" "}${itemData.item.price}{" "}
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
              numColumns={3}
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
        height: 500,
        width: 50,
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: "gray",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 2,
        justifyContent: "left",
        alignItems: "left",
        padding: 15,
        margin: 5,
        marginHorizontal: 50,
        marginRight: 150,
        marginBottom: 50,
      },
      text: {
        fontSize: 15,
        fontFamily: "halfmoon_bold",
        alignContent: "flex-end",
        marginTop: 10,
      },
    });
export default WomensShirts;
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

class MensShirts extends Component {
    state = {
    clothing_types: [
    {
        id: "1",
        title: "Shirts1",
        image: "https://n.nordstrommedia.com/id/sr3/0932200c-65f0-4a2f-b300-8ee56c7fad03.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price: "15.99",
    },
    {
        id: "2",
        title: "Shirts2",
        image: "https://n.nordstrommedia.com/id/sr3/0932200c-65f0-4a2f-b300-8ee56c7fad03.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price: "25.99",
    },
    {
        id: "3",
        title: "Shirts3",
        image: "https://n.nordstrommedia.com/id/sr3/0932200c-65f0-4a2f-b300-8ee56c7fad03.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price: "10.99",
    },
    {
      id: "4",
      title: "Shirts4",
      image: "https://n.nordstrommedia.com/id/sr3/0932200c-65f0-4a2f-b300-8ee56c7fad03.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      price: "17.99",
    },
    {
      id: "5",
      title: "Shirts5",
      image: "https://n.nordstrommedia.com/id/sr3/0932200c-65f0-4a2f-b300-8ee56c7fad03.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      price: "13.99",
    },
    {
      id: "6",
      title: "Shirts6",
      image: "https://n.nordstrommedia.com/id/sr3/0932200c-65f0-4a2f-b300-8ee56c7fad03.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
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
                style={{ width: 400, height: 400 }}
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
export default MensShirts;
import React, {Component} from "react";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";

class Womens_Wear extends Component {
    state = {
    clothing_types: [
        {
            id: "1",
            title: "Shirts",
            image: "https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/t-shirt-1024.png",
        },
        {
            id: "2",
            title: "Pants",
            image: "https://cdn1.iconfinder.com/data/icons/iconoir-vol-3/24/pants-1024.png",
        },
        {
            id: "3",
            title: "Hats",
            image: "https://cdn3.iconfinder.com/data/icons/summertime-6/512/cap_hat-1024.png",
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
export default Womens_Wear;
import React, { Component } from "react";
import { Image, StyleSheet, FlatList } from "react-native";
import {
  View,
  Text,
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Body
} from "native-base";

import "../data";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: product
    };
  }

  title_truncate = str => {
    if (str.length > 50) {
      return str.substring(0, 50) + "...";
    } else {
      return str;
    }
  };

  desc_truncate = str => {
    if (str.length > 28) {
      return str.substring(0, 28) + "...";
    } else {
      return str;
    }
  };

  formatUsd = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  goToDetailsProduct = item => () => {
    this.props.navigation.navigate("DetailProduct", { item });
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.onerow}>
            <FlatList
              data={this.state.products}
              renderItem={({ item }) => (
                <Card style={styles.card}>
                  <CardItem button onPress={this.goToDetailsProduct(item)}>
                    <Left>
                      <Image
                        style={styles.image}
                        source={{ uri: item.image }}
                      />
                      <Body>
                        <Text style={styles.title}>
                          {this.title_truncate(item.name)}
                        </Text>
                        <Text style={styles.desc}>
                          {this.desc_truncate(item.desc)}
                        </Text>
                        <Text style={styles.price}>
                          ${this.formatUsd(item.price)}
                        </Text>
                      </Body>
                    </Left>
                  </CardItem>
                </Card>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  onerow: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15
  },
  image: {
    width: 120,
    height: 120
  },
  title: {
    fontWeight: "bold"
  },
  price: {
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 5,
    color: "green"
  },
  desc: {
    fontSize: 14,
    marginTop: 5
  }
});

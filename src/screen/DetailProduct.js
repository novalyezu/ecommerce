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
  Body,
  Button,
  Right,
  Footer
} from "native-base";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: ""
    };
  }

  formatUsd = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  render() {
    const { navigation } = this.props;
    let product = navigation.getParam("item");
    return (
      <Container>
        <Content>
          <View style={styles.backImage}>
            <Image source={{ uri: product.image }} style={styles.image} />
          </View>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>
                  ${this.formatUsd(product.price)}
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={styles.descTitle}>Description :</Text>
                <Text style={styles.desc}>{product.desc}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Footer style={{ backgroundColor: "#fff" }}>
          <View style={styles.viewBtn}>
            <Button bordered info rounded block style={styles.btn}>
              <Text>Buy Now</Text>
            </Button>
            <Button info rounded block style={styles.btn}>
              <Text>Add to Cart</Text>
            </Button>
          </View>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backImage: {},
  image: {
    width: null,
    height: 400
  },
  title: {
    fontSize: 22,
    fontWeight: "bold"
  },
  price: {
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 5,
    color: "green",
    fontSize: 18
  },
  desc: {
    fontSize: 16,
    marginTop: 5
  },
  descTitle: {
    fontSize: 17,
    fontWeight: "bold"
  },
  viewBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    marginTop: 5
  },
  btn: {
    width: 150
  }
});

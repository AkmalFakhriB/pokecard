import React, {useEffect, useState} from 'react';
import {Card, Skeleton, Text} from '@rneui/base';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import axios from 'axios';

const Dashboard = () => {
  let pokemonData: any;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPokemon = () => {
    setIsLoading(() => true);
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(
      response => {
        pokemonData = response.data;
        console.log(pokemonData.name);
        setIsLoading(() => false);
      },
      error => {
        console.log(error);
      },
    );
  };

  return (
    <SafeAreaView>
      <Header title="Dashboard" />
      <ScrollView>
        <Card>
          <Card.Title>Pokemon Card</Card.Title>
          <Card.Divider />
          <View>
            {isLoading ? (
              <Skeleton animation="pulse" />
            ) : (
              <>
                <Text style={styles.textStyle}>
                  Pokemon Name : {pokemonData?.name}
                </Text>
                <Text style={styles.textStyle}>Pokemon Size :</Text>
              </>
            )}
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
  },
});

export default Dashboard;

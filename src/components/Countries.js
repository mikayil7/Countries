import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {getCountries} from '../actions/action';
//import axios from 'axios';

const Countries = (props) => {
  /* const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(response => setCountries(response));
  }, []);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(response => setCountries(response.data))
      .catch(error=>console.log(error));
  }, []);*/

  useEffect(() => {
    props.getCountries();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: 'green',
          fontSize: 32,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Countries
      </Text>

      <ScrollView>
        {props.isLoading ? (
          <Image
            style={{width: 30, height: 30}}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_%28wobbly%29.gif',
            }}></Image>
        ) : (
          props.countries.map((country, index) => {
            return (
              <ScrollView key={index}>
                <Text style={styles.text}>{country.name}</Text>
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: 'center',
                    fontStyle: 'italic',
                    color: 'grey',
                  }}>
                  Capital : {country.capital}
                </Text>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={{width: 120, height: 80}}
                    source={{uri: country.flags.png}}
                  />
                </View>
              </ScrollView>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    color: '#f36444',
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {getCountries})(Countries);

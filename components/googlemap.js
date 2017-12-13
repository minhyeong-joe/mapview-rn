import React, { Component } from 'react';
import { Text, View, ScrollView, Platform } from 'react-native';
import { MapView } from 'expo';

import { Header, Body, Section, MyButton, InputField, Footer } from './reusable'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class GoogleMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentRegion: null,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922 * 0.1,
        longitudeDelta: 0.0421 * 0.1,
      },
      markerRegion: null,
      showMarker: false,
      location: ''
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.setState({
        currentRegion: {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          latitudeDelta: 0.0922 * 0.1,
          longitudeDelta: 0.0421 * 0.1,
        },
        region: {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          latitudeDelta: 0.0922 * 0.1,
          longitudeDelta: 0.0421 * 0.1,
        },
      });
    }, (error) => {
      alert(error.code + ' : ' + error.message);
    });
  }

  onRegionChange(region) {
    this.setState({
      region: region
    });
  }

  goToMarker() {
    if(this.state.showMarker){
        this.map.animateToRegion(this.state.markerRegion, 1500);
    }
  }

  currentLocation(){
    this.map.animateToRegion(this.state.currentRegion, 1500);
  }

  setMarker(e){
    this.setState({
      markerRegion: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
        latitudeDelta: 0.0922 * 0.1,
        longitudeDelta: 0.0421 * 0.1,
      },
      showMarker: true
    });
  }

  renderMarker() {
    if(this.state.showMarker){
      return(
        <MapView.Marker
          coordinate={this.state.markerRegion}
        />
      );
    }
  }

  renderMarkerCoord() {
    if(this.state.showMarker){
      return(
        <View>
          <Text>{this.state.markerRegion.latitude.toFixed(5)}</Text>
          <Text>{this.state.markerRegion.longitude.toFixed(5)}</Text>
        </View>
      )
    }
  }

  hideMarker() {
    this.setState({
      showMarker: false
    });
    this.onRegionChange();
  }

  search(location) {
    console.log(location);
    this.setState({
      markerRegion: {
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.0922 * 0.1,
        longitudeDelta: 0.0421 * 0.1,
      },
      showMarker: true
    });
    this.map.animateToRegion(this.state.markerRegion, 1500);
      // api.getData(this.state.location)
      // .then(result => {
      //   const location = result.data.results[0].geometry.location;
      //   this.setState({
          // markerRegion: {
          //   latitude: location.lat,
          //   longitude: location.lng,
          //   latitudeDelta: 0.0922 * 0.1,
          //   longitudeDelta: 0.0421 * 0.1,
          // },
          // showMarker: true
      //   });
      //   this.map.animateToRegion(this.state.markerRegion, 1500);
      // })
      // .catch(error => {
      //   console.log(error);
      // })
  }


  render() {
    if (this.state.currentRegion) {
      return (
        <View style={{flex: 1}}>
          <ScrollView keyboardDismissMode='on-drag' keyboardShouldPersistTaps="always">
            <Header>MAP</Header>
            <Body>
              <Section>
                <View style={{flex:1}}>
                  <GooglePlacesAutocomplete
                    placeholder='Search'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'search'}
                    listViewDisplayed='auto'
                    fetchDetails={true}
                    renderDescription={row => row.description}
                    onPress={(data, details = null) => this.search(details.geometry.location)}

                    getDefaultValue={() => ''}

                    query={{
                      key: 'AIzaSyDpGwiLpWG-aYh8xMMxxk7FXPLEYgiarwU',
                      language: 'en'
                    }}
                    styles={{
                      textInputContainer: {
                        width: '100%'
                      },
                      description: {
                        fontWeight: 'bold'
                      },
                      predefinedPlacesDescription: {
                        color: '#1faadb'
                      }
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GooglePlacesSearchQuery={{
                      rankby: 'distance',
                      types: 'food'
                    }}
                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                  />
                </View>
              </Section>
              <Section>
                <MapView
                  ref={ref => { this.map = ref; }}
                  style={{height: 300, flex: 1}}
                  region={this.state.region}
                  onRegionChange={this.onRegionChange.bind(this)}
                  onPress={this.setMarker.bind(this)}
                  showsUserLocation
                 >
                   {this.renderMarker()}
                 </MapView>
              </Section>
              <Section>
                <View style={{flex:1}}>
                  <MyButton action={this.currentLocation.bind(this)}>Current Location</MyButton>
                  <View style={{flexDirection: 'row'}}>
                    <MyButton action={this.goToMarker.bind(this)}>Go To Marker</MyButton>
                    <MyButton action={this.hideMarker.bind(this)}>Delete Marker</MyButton>
                  </View>
                </View>
              </Section>
            </Body>
          </ScrollView>
          <Footer />
        </View>
      );
    } else {
      return (
        <View />
      );
    }

  }
}

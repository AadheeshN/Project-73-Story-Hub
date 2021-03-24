import * as React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet, FlastList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import firebase from 'firebase';
import db from 'config';

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      allBooks: [],
    }
    this.requestRef = null;
  }

  updateSearch = (search) => {
    this.setState({ search: search });
  };

  reviveStories = async() => {
    this.requestRef = db.collection('books').onSnapshot((snapshot)=> {
      var allBooks = snapshot.docs.map(document => document.data());
      this.setState({allBooks: allBooks})
    })
  }

  keyExtractor = (item, index) =>  index.toString();

  renderItem = ( {item, i} )  => {
    return(
      <ListItem 
      key ={i}
      title = {item.bookName}
      subtitle = {item.author}
      titleStyle = {{ color : 'black', fontWeight: 'bold' }}
      bottomdivider
      />
    )
  }

  render() {
    const { search } = this.state;

    return (
      <KeyboardAvoidingView>
        <View style = {{marginTop: 5, flex: 0.9}}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
          <FlatList 
            keyExtractor = {this.keyExtractor}
            data = {this.state.allBooks}
            renderItem = {this.renderItem}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = styleSheet.create({
  
})
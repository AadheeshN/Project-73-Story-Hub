import * as React from 'react';
import { Text, View, KeyboardAvoidingView, Image, TouchableOpacity, TextInput, StyleSheet, Header, ScrollView, Alert, ToastAndroid } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
       booktitle: '', 
       author: '',
       story: '',
    };
  }

  submitStory = (booktitle, author, story) => {
    var booktitle = this.state.booktitle;
    var author = this.state.author;
    var story = this.state.author;

    db.collection('books').add({
      'book_title': booktitle,
      'author': author,
      'story': story,
    })

    this.setState({booktitle: '', author: '', story: '',})
    submitMessage = "Story Submitted Successfully";
    ToastAndroid.show(submitMessage, ToastAndroid.SHORT)
  }

  render() {
    return(
      <KeyboardAvoidingView style = {styles.container}>
        <AppHeader />
      
        <TextInput style={styles.inputBox}
              placeholder="Book Title"
              onChangeText={(text) => {
                this.setState({ booktitle: text});
              }}
        />
        <TextInput style={styles.inputBox}
              placeholder="Author"
              onChangeText={(text) => {
                this.setState({ author: text});
            }}
        />
        <TextInput style={styles.storyInputBox}
              multiline
              numberOfLines = {5}
              placeholder="Write Story Here"
              onChangeText={(text) => {
                this.setState({ story: text});
           }}
        />

        <TouchableOpacity style = {styles.submitButton} onPress = {this.submitStory}>
          <Text>Submit</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  inputBox: {
    width: 300,
    height: 30,
    borderWidth: 1.5,
    fontSize: 20,
    marginTop: 25,
  },

    storyInputBox: {
    width: 300,
    height: 200,
    borderWidth: 1.5,
    fontSize: 20,
    marginTop: 25,
  },

  submitButton: {
    backgroundColor: 'lightpink',
    marginTop: 20,
    width: 75,
    height: 25,
    alignItems: 'center',
    alignContent: 'center',
  }

});
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Button,
} from 'react-native'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './actions/actions';

class TodoInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textInput: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={(text) => this.setState({textInput: text})}/>
        <Button title="Add" style={styles.addButton} onPress={this.addButtonDidPress.bind(this)}/>
      </View>
    )
  }

  addButtonDidPress() {
    this.props.addTodo(this.state.textInput)
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  textInput: {
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: 10,
    flexGrow: 1,
  },
  addButton: {
    backgroundColor: "lightgray",
    paddingLeft: 0,
  }
});

const addTodoActionCreator = (title) => {
  return (dispatch) => {
    dispatch(Actions.addTodo(title))
    // dispatch(Actions.incCounter())
    setTimeout(() => {
      dispatch(Actions.incCounter())
    }, 2000)
  }
}

export default connect(
  null,
  {addTodo: addTodoActionCreator}
)(TodoInput);

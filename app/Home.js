import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  NavigatorIOS,
  ScrollView,
  ListView,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import TodoInput from './TodoInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
    marginTop: 60,
  },
  scrollView: {
  },
  scrollViewContentContainer: {
  },
  cover: {
    alignSelf: 'stretch',
    resizeMode: 'contain',
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray"
  }
});

class Home extends Component {

  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   navigator: PropTypes.object.isRequired,
  // }

  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {
      r1 !== r2
    }})

    this._ds = ds

    this.state = {
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.state);
  }

  _dataSource() {
    return this._ds.cloneWithRows(this.props.todoList)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>State: {this.props.defaultState}</Text>

        <TodoInput />

        <ListView
          dataSource={this._dataSource()}
          renderRow={(rowData, sectionId, rowId, hightlightRow) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    hightlightRow(sectionId, rowId)
                  }}>
                  <Text>Row {rowId}: {rowData}</Text>
                </TouchableOpacity>
              )
          }}
          renderSeparator={(sectionId, rowId, adjacentRowHighlighted) => {
            return (
              <View style={styles.separator}/>
            )
          }}
        />
      </View>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

import withObservables from '@nozbe/with-observables'
import CheckBox from '@react-native-community/checkbox'
import React from 'react'
import { Component } from 'react'
import { FlatList, Image, TextInput, TouchableOpacity, View } from 'react-native'

import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'

import styles from './styles'

class TaskPage extends Component {
  state = {
    newTaskName: ''
  }

  render = () => {
    const { tasks } = this.props

    return (
      <>
        <FlatList
          data={tasks}
          ListHeaderComponent={this.renderHeader}
          renderItem={this.renderTask}
          keyExtractor={(item) => 'item' + item.id}
        />
      </>
    )
  }
  renderTask = ({ item }) => (
    <View style={[styles.itemContainer, styles.insideContainer]}>
      <View style={styles.insideContainer}>
        <CheckBox
          isChecked={item.completed}
          style={styles.checkbox}
          checkBoxColor="#666666"
          uncheckedCheckBoxColor="#666666"
          checkedCheckBoxColor="#38d13b"
          onClick={() => this.onChangeItemCompleted(item)}
        />
        <TextInput
          style={styles.input}
          value={item.name}
          onChangeText={(value) => this.onChangeItemName(item, value)}
        />
      </View>
      <TouchableOpacity onPress={() => this.removeTask(item)}>
        <Image style={styles.icon} source={require('../assets/remove.png')} />
      </TouchableOpacity>
    </View>
  )
  renderHeader = () => (
    <View style={[styles.itemContainer, styles.insideContainer]}>
      <View style={styles.insideContainer}>
        <TextInput
          style={[styles.input, styles.headerInput]}
          placeholder="New Task"
          onChangeText={this.onChangeNewTaskName}
          value={this.state.newTaskName}
        />
      </View>
      <TouchableOpacity
        style={[styles.rightButton, styles.addButton]}
        onPress={() => this.addTask()}
      >
        <Image style={styles.icon} source={require('../assets/add.png')} />
      </TouchableOpacity>
    </View>
  )

  onChangeNewTaskName = (value) => {
    this.setState({ newTaskName: value })
  }

  addTask = async () => {
    const { database } = this.props
    const { newTaskName } = this.state
    const tasksCollection = database.collections.get('tasks')

    await database.write(async () => {
      await tasksCollection.create((task) => {
        task.name = newTaskName
        task.completed = false
      })
      this.setState({ newTaskName: '' })
    })
  }

  onChangeItemName = async (item, name) => {
    const { database } = this.props
    const tasksCollection = database.collections.get('tasks')
    const taskToUpdate = await tasksCollection.find(item.id)

    await database.write(async () => {
      await taskToUpdate.update((task) => {
        task.name = name
      })

      this.setState({ refreshing: !this.state.refreshing })
    })
  }

  onChangeItemCompleted = async (item) => {
    const { database } = this.props
    const tasksCollection = database.collections.get('tasks')
    const taskToUpdate = await tasksCollection.find(item.id)

    await database.write(async () => {
      await taskToUpdate.update((task) => {
        task.completed = !item.completed
      })

      this.setState({ refreshing: !this.state.refreshing })
    })
  }

  removeTask = async (item) => {
    const { database } = this.props
    const tasksCollection = database.collections.get('tasks')
    const taskToRemove = await tasksCollection.find(item.id)

    await database.write(async () => {
      await taskToRemove.destroyPermanently()
    })
  }
}

export default withDatabase(
  withObservables([], ({ database }) => ({
    tasks: database.collections.get('tasks').query().observe()
  }))(TaskPage)
)

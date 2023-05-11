import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  itemContainer: {
    width: "70%",
    padding: 15,
    justifyContent: 'center',
    backgroundColor: "yellow"
  },
  insideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: "gray"
  },
  checkbox: {
    width: 30,
    marginRight: 15,
    borderColor: '#666666'
  },
  icon: {
    height: 30,
    width: 30
  },
  input: {
    flex: 1
  },
  headerInput: {
    // marginLeft: 45,
    backgroundColor: "white",
    width: "50%"
  }
})

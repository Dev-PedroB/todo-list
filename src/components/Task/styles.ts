import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    task: {
        flex: 1,
        fontSize: 16,
        color: 'white',
        marginLeft: 10
    },
    buttomText:{
      tintColor:'white',
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttomDone:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1e6f9f',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      },
      taskContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    doneBackground: {
      backgroundColor: '#1e6f9f',
    },
    notDoneBackground: {
      backgroundColor: '#E23C44',
    },
    })
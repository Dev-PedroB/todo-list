import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    logo: {
      color: '#FDFCFE',
        alignSelf: 'center',
        marginTop: '15%'
    },
      listDate: {
        color: '#FDFCFE',
        fontSize: 16,
        marginTop: 46,
        fontWeight: 'bold',
        color:'#1e6f9f'
      },
      input: {
        flex: 1,
        backgroundColor: '#1F1E25',
        height:56,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 20,
        marginRight: 12
      },
      buttomText:{
        color: '#FFF',
        fontSize: 24
      },
      buttomDone:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1e6f9f',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginRight: 5
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1e6f9f',
        alignItems: 'center',
        justifyContent: 'center'
      },
      form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 42
      },
      listEmptyText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'
      },
    taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  countersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginBottom: 40
  },
  counter: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#1e6f9f'
  },
  });
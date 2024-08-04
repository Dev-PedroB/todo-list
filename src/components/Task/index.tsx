import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
  isDone: boolean;
  toggleTaskState: () => void;
}

export function Task({name, onRemove, isDone, toggleTaskState}: Props ) {
    return(
        <View style={styles.container}>

<TouchableOpacity 
        style={[styles.buttomDone, isDone ? styles.doneBackground : styles.notDoneBackground]} 
        onPress={toggleTaskState}
      >
        <Image
          source={isDone ? require('../../../assets/AppIcons/verificado.png') : require('../../../assets/AppIcons/nao-verificado.png')}
          style={{width: 32, height: 32, tintColor: 'white'}}
        />
      </TouchableOpacity>


        <Text style={styles.task}>{name}</Text>
        
        <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image source={require('../../../assets/AppIcons/lixeira.png')} style={styles.buttomText}></Image>
        </TouchableOpacity>

      </View>
    )
}
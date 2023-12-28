import { View, Text, StyleSheet } from 'react-native';
import Title from "./src/components/title";
import User from "./src/components/user";
import Users from "./src/components/users"
import Header from "./src/components/header"
const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Title text="React Native" color="red" numberOfLines={1} />
      <Title text="React" color="green" numberOfLines={2} />
      <Title text="Java Script" color="blue" numberOfLines={3} />  
      <User data={{id: 1, name: "Mehmet"}} />
      <Users data = {["Ahmet","Mehmet","Ayşe","Fatma"]} />
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent: 'center',
   alignItems:'center',
   
  },
  

});

export default App;

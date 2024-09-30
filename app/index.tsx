import {
  FlatList,
  Image,
  ListRenderItem,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { data } from "../assets/data";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const renderItem: ListRenderItem<any> = ({ item }) => (
    <View style={{ flexDirection: "row", padding: 8, flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: item.image }} style={{ width: 75, height: 75 }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ width: 200 }}>{item.title}</Text>
          <Text style={{ color: "gray" }}>Price: ${item.price}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionicons name="remove" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 16,
      }}
    >
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}

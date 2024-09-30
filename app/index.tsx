import {
  FlatList,
  Image,
  ListRenderItem,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { data } from "../assets/data";
import { Ionicons } from "@expo/vector-icons";
import useCartStore from "@/store/cartStore";

export default function Index() {
  const { addProduct, reduceProduct, items } = useCartStore();
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
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => reduceProduct(item)}
        >
          <Ionicons name="remove" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => addProduct(item)}
        >
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={"#000"} />
      <View
        style={{
          alignItems: "flex-end",
          backgroundColor: "#000",
          padding: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
          {items}
        </Text>
      </View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
}

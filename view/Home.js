import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome5, FontAwesome } from "@expo/vector-icons";

const apiEndpoint = "https://664c171935bbda10987eed26.mockapi.io/crudItems";

export default function Home() {
  const [listdatapopular, setListdatapopular] = useState([]);
  const [listdatarecomments, setListdatarecomments] = useState([]);
  const [listdataTopTeacher, setListdataTopTeacher] = useState([]);
  const [listdataCourseInspires, setListdataCourseInspires] = useState([]);
  const [crudItems, setCrudItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    fetch("https://65419d75f0b8287df1fe8b4a.mockapi.io/popularCourse")
      .then((response) => response.json())
      .then((data) => {
        setListdatapopular(data);
      });

    fetch("https://65419d75f0b8287df1fe8b4a.mockapi.io/recomment")
      .then((response) => response.json())
      .then((data) => {
        setListdatarecomments(data);
      });

    fetch("https://655d51109f1e1093c5993290.mockapi.io/courseInspires")
      .then((response) => response.json())
      .then((data) => {
        setListdataCourseInspires(data);
      });

    fetch("https://655d51109f1e1093c5993290.mockapi.io/TopTeacher")
      .then((response) => response.json())
      .then((data) => {
        setListdataTopTeacher(data);
      });

    // Fetch CRUD items from MockAPI
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => setCrudItems(data));
  }, []);

  const addItem = () => {
    if (newItem.trim().length > 0) {
      const newItemObject = { name: newItem };
      fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItemObject),
      })
        .then((response) => response.json())
        .then((data) => {
          setCrudItems([...crudItems, data]);
          setNewItem("");
        });
    }
  };

  const deleteItem = (id) => {
    fetch(`${apiEndpoint}/${id}`, {
      method: "DELETE",
    }).then(() => {
      const newItems = crudItems.filter((item) => item.id !== id);
      setCrudItems(newItems);
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{
          backgroundColor: "white",
          height: 120,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 22, color: "black", fontWeight: "800" }}>
            Dành cho bạn
          </Text>
        </View>

        <View
          style={{
            marginLeft: "auto",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="search1" size={26} color="black" style={{ marginRight: 10 }} />
          <Image
            source={require("../assets/Avatar5.jpg")}
            style={{ width: 50, height: 50, borderRadius: 15, marginRight: 10 }}
          />
        </View>
      </SafeAreaView>

      <View style={{ alignItems: "center" }}>
        <ScrollView
          style={{ width: "90%", height: "78%" }}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
        >
          {/* hình ảnh */}

          {/* Xem chuyên mục */}

          {/* Xem phổ biến */}
          <Text style={{ color: "#a9a9a9" }}>Thứ Hai, ngày 12 tháng 9</Text>
          <View style={{ marginTop: 30 }}>
            {/* nội dung phổ biến */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Tin tức hàng đầu
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  Xem tất cả
                </Text>
              </TouchableOpacity>
            </View>

            {/* các mục phổ biến */}
            <View style={{ height: 330 }}>
              <FlatList
                data={listdatapopular}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 700, width: 400 }}>
                    <TouchableOpacity>
                      <Image
                        source={{ uri: item.image }}
                        style={{ width: 400, height: 200 }}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      ></View>

                      <View>
                        <Text style={{ marginTop: 10, color: "#a9a9a9" }}>{item.title}</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>{item.author}</Text>
                        <Text style={{ marginTop: 10, color: "#a9a9a9" }}>{item.rating}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            {/* nội dung gợi ý */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Gợi ý cho bạn
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  Xem thêm
                </Text>
              </TouchableOpacity>
            </View>
            {/* các mục gợi ý */}
            <View style={{ height: 300 }}>
              <FlatList
                data={listdatarecomments}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 250 }}>
                    <TouchableOpacity
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{ width: 200, height: 150 }}
                      />
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>
                          {item.title}
                        </Text>
                        <FontAwesome name="bookmark-o" size={24} color="black" />
                      </View>
                      <Text style={{ fontWeight: 600, color: "gray" }}>
                        {item.author}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 600,
                          color: "rgb(83,92,233)",
                          fontSize: 16,
                        }}
                      >
                        ${item.price}
                      </Text>
                      <View style={{ flexDirection: "column", alignItems: "center" }}>
                        <FontAwesome name="star" size={24} color="#fd3" />
                        <Text style={{ fontWeight: 600 }}>
                          {item.rating} ({item.ratingCount}) - {item.lessons} bài học
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          {/* Phần CRUD */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>Thao tác CRUD</Text>
            <TextInput
              placeholder="Nhập mục mới"
              value={newItem}
              onChangeText={setNewItem}
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                paddingHorizontal: 10,
                marginVertical: 10,
              }}
            />
            <Button title="Thêm mục" onPress={addItem} />
            <FlatList
              data={crudItems}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "gray",
                  }}
                >
                  <Text>{item.name}</Text>
                  <Button title="Xóa" onPress={() => deleteItem(item.id)} />
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

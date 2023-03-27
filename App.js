import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomSheet, { BottomSheetFlatList, } from '@gorhom/bottom-sheet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <BottomSheetFlatList
          data={listBinhLuan}
          keyExtractor={(item) => item.id}
          renderItem={renderItemBinhLuan}
          contentContainerStyle={styles.contentContainer}
        />
        <View style={styles.boxInput}>

          {
            isLoggedIn !== false && nguoidung.avatar !== "" ?
              <Image
                source={{ uri: nguoidung.avatar }}
                style={styles.imageTaiKhoan} />
              :
              <View />
          }

          <TextInput
            style={styles.textInputBinhLuan}
            placeholder='Thêm bình luận'
            cursorColor={'#777'}
            placeholderTextColor={'#777'}
            onChangeText={text => setNoiDungBinhLuan(text)}
            value={noiDungBinhLuan}
            multiline={true}
            numberOfLines={4} />
          <TouchableOpacity style={styles.iconSend} onPress={() => addBinhLuan()}>
            <MaterialCommunityIcons name="send" size={24} color="green" />
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/details");
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Họ và tên: Phạm Công Chiến</Text>
      <Text style={{ fontSize: 20 }}>Mã số sinh viên: 22110116</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

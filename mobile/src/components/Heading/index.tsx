import { View, Text, ViewProps } from "react-native";

import { styles } from "./styles";

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

export function Heading({ title, subtitle, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>{title}</Text>
      <Text style={styles.container}>{subtitle}</Text>
    </View>
  );
}

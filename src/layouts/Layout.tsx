import { ReactNode } from "react";
import { View } from "react-native";
import { TopBar } from "../components/TopBar";
import { COLORS } from "../styles/theme";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <TopBar />
      {children}
    </View>
  );
};

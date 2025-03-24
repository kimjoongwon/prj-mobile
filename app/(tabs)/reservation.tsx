import { View } from "@/components/ui/common/View/View";
import { Text } from "@/components/ui/common/Text/Text";
import { observer } from "mobx-react-lite";
import { Button } from "@/components/ui/common/Button/Button";
import { SheetManager } from "react-native-actions-sheet";

const ReservationScreen = observer(() => {
  return (
    <View>
      <Button onPress={() => SheetManager.show("gyms")}>Action Sheet</Button>
      <Text>Reservation</Text>
    </View>
  );
});

export default ReservationScreen;

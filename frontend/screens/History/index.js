import { View, Text, ScrollView } from 'react-native';
import { Data } from '../../context/DataContext';
import DisplayData from './DisplayData';


function History() {

    const {datas} = Data();
    
    if (!datas) return null;

    if (datas == []) return (
        <View className="flex items-center justify-center p-[50px] gap-y-[20px]">
            <Text className="text-[32px] " style={{ fontFamily: 'RobotoBold'}}>No Records Found</Text>
        </View>
    )
    //items-center
    return (
        
        <ScrollView className="flex px-[40px]">
            {datas && <DisplayData datas={datas} />}
        </ScrollView>

    )
}

export default History
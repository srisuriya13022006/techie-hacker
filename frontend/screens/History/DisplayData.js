import { Text, View } from 'react-native';
import { changeColor } from '../../components/color';

export default function DisplayData ({datas}) {
    let curr, prevDate;
    return datas.map( (ele, index) => {
        prevDate = curr;
        curr = ele.date;
        let color = changeColor(ele.sugar);
        return (
            <View key={index}>
                {(ele.date != prevDate) && <Text className="text-[32px] my-[20px] " style={{ fontFamily: 'RobotoBold'}}>{ele.date}</Text>}
                <View className={`flex-row gap-x-[20px] `} >
                    <View className={`flex self-center p-[15px] pb-[25px] w-[220px] items-center rounded-[20px] justify-center mb-[10px]`} style={{backgroundColor: color}}>
                        <Text style={{ fontFamily: 'RobotoMedium'}} >
                            <Text className="text-white text-[45px]" >{ele.sugar} </Text> 
                            <Text className="text-white text-[20px]">mg/dl</Text>
                        </Text>
                    </View>
                    <Text className="text-black text-[18px] self-end mb-[20px]" style={{ fontFamily: 'RobotoMedium'}}>{ele.time}</Text>
                </View>
            </View>
        )
    })
}
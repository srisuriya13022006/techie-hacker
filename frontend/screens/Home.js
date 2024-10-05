
import { useLayoutEffect, useState } from 'react';
import { View, Text, Pressable, TouchableHighlight, ScrollView, TextInput, Image } from 'react-native';
import { changeColor } from '../components/color';
import { Data } from '../context/DataContext';

import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { Ionicons } from '@expo/vector-icons';

import {CircularProgressBase}  from 'react-native-circular-progress-indicator';
import Run from '../icons/run.svg';
import Energy from '../icons/energy.svg';
import FoodImage from './FoodImage';
import Robot from '../assets/robot.png';

function Home({reload, page, setPage, setModalVisible, dishRecommendation}) {

    const {datas, setDatas} = Data();
    const [xDataPoints, setXDataPoints] = useState();
    const [yDataPoints, setYDataPoints] = useState();
    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 10

    const [glucose, setGlucose] = useState();
    const [showImage, setShowImage] = useState(false);
    const [glucoseLevel, setGlucoseLevel] = useState();


    const props = {
        activeStrokeWidth: 10,
        inActiveStrokeWidth: 10,
        inActiveStrokeOpacity: 0.2
    };

    useLayoutEffect(()=>{

        (async function  () {
            
            try {

                const response = await fetch('https://visonary-glucometer-server.onrender.com/api/sugar/');
                if(!response.ok) {
                    console.log("err with server");
                }
                else {
                    const json = await response.json();
                    setDatas(json)
                    console.log(json)

                    let last7Days = [];
                    for (var i=6; i>=0; i--) {
                        var d = new Date();
                        d.setDate(d.getDate() - i);
                        last7Days.push(d.getDate());
                    }
                    setXDataPoints(last7Days);

                    let d7 = new Date();
                    d7.setDate(d7.getDate() - 6);
                    let last7DaysData = json.map((ele, i)=> {
                        let d = new Date(ele.createdAt.split('T')[0]);
                        if (d>d7) return ele.sugar;
                    })

                    last7DaysData.reverse()
                    
                    setYDataPoints(last7DaysData);
                }

            }
            catch(error) {
                console.log("err when getting data");
            }

        })()

    }, [reload])

    if (!datas || !yDataPoints) return null;

    if (datas == []) return (
        <View className="flex items-center justify-center p-[50px] gap-y-[20px]">
            <Text className="text-[32px] " style={{ fontFamily: 'RobotoBold'}}>No Records Found</Text>
        </View>
    )

    return (
        (page=='') ? 

        <View className="flex p-[35px] py-[40px] items-center gap-y-[15px]">
            <Text className="text-[32px] text-[#5a54ac]" style={{ fontFamily: 'RobotoBold'}}>Last Recent Record</Text>
            <View className={`flex self-center p-[15px] pb-[25px] w-[290px] items-center rounded-[25px] justify-center  `} style={{backgroundColor: changeColor(datas[0].sugar)}}>
                <Text style={{ fontFamily: 'RobotoMedium'}} >
                    <Text className="text-white text-[50px]" >{datas[0].sugar} </Text> 
                    <Text className="text-white text-[20px]">mg/dl</Text>
                </Text>
                <Text className="text-white text-[16px] mt-[5px]" style={{ fontFamily: 'RobotoMedium'}}>{datas[0].date}, {datas[0].time}</Text>
            </View>
            <View style={{ height: 220, width: 290, flexDirection: 'row', paddingRight: 10 }}>
                <Text className="[transform:rotate(-90deg)] w-[40px] h-[20px] self-center mx-[-7px] mb-[18px] mr-[-4px]">mg / dl</Text>
                <YAxis
                    data={yDataPoints}
                    style={{ marginBottom: xAxisHeight, width: 16 }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={yDataPoints}
                        contentInset={verticalContentInset}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                    >
                        <Grid/>
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight, marginBottom: -10 }}
                        data={xDataPoints}
                        xAccessor={ ({ item }) => item }
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>
            <Text className="text-[14px] mt-[-20px] self-center">Date</Text>
            <View className="border-[5px] border-[#736CD1]  rounded-[12px] p-[1px] mt-[10px] " >
                <TouchableHighlight className="border-[1px] rounded-[8px] px-[10px] py-[6px] " underlayColor={'#bab6ed'} onPress={()=>{setPage('recommend')}}>
                    <Text className="text-[25px] font-[#fd4d5c] text-[#736CD1] " style={{fontFamily: 'RobotoBold'}}>Diet Plan</Text>
                </TouchableHighlight>
            </View>

            <View className="border-[5px] border-[#736CD1]  rounded-[12px] p-[1px] mt-[5px] " >
                <TouchableHighlight className="border-[1px] rounded-[8px] px-[10px] py-[6px] " underlayColor={'#bab6ed'} onPress={()=>{setPage('fridge'); setModalVisible('fridge')}}>
                    <Text className="text-[25px] font-[#fd4d5c] text-[#736CD1] " style={{fontFamily: 'RobotoBold'}}>NutriGluco Chef</Text>
                </TouchableHighlight>
            </View>
        </View>

        : 

        (page == 'recommend') ?

            <View className="flex ">
                <View className='flex-row mx-[-5px] p-[7px] px-[15px] bg-[#635db7]'>
                    <Pressable onPress={()=>{ setShowImage(false); setPage('')}} className=''><Ionicons name="chevron-back-circle-outline" className="text-white" size={54} color="white" /></Pressable>
                    <View className="flex w-[80%] items-center justify-center">
                        <Text className='text-[28px] text-white' style={{fontFamily: 'RobotoBold'}}>Recommended Meal</Text>
                    </View>
                </View>
                <ScrollView>
                <View className="px-[20px] py-[10px] flex-row justify-between ">
                    <View>
                        <Text className='mb-[6px] text-center text-[25px]' style={{fontFamily:'RobotoMedium'}} >Activity</Text>
                        <View className="p-[7px] border-[2px] rounded-[25px]">
                            <CircularProgressBase
                                {...props}
                                value={80}
                                radius={68}
                                activeStrokeColor={'#e84118'}
                                inActiveStrokeColor={'#e84118'}
                                >
                                <CircularProgressBase
                                    {...props}
                                    value={87}
                                    radius={55}
                                    activeStrokeColor={'#badc58'}
                                    inActiveStrokeColor={'#badc58'}
                                >
                                    <CircularProgressBase
                                    {...props}
                                    value={62}
                                    radius={42}
                                    activeStrokeColor={'#18dcff'}
                                    inActiveStrokeColor={'#18dcff'}
                                    children={<Run height={47} width={47} />}
                                    />
                                </CircularProgressBase>
                            </CircularProgressBase>
                        </View>
                    </View>

                    <View>
                        <Text className='mb-[6px] text-center text-[25px]' style={{fontFamily:'RobotoMedium'}} >Calorie</Text>
                        <View className="p-[7px] border-[2px] rounded-[25px]">
                        <CircularProgressBase
                                {...props}
                                value={80}
                                radius={68}
                                activeStrokeColor={'#e84118'}
                                inActiveStrokeColor={'#e84118'}
                                >
                                <CircularProgressBase
                                    {...props}
                                    value={87}
                                    radius={55}
                                    activeStrokeColor={'#badc58'}
                                    inActiveStrokeColor={'#badc58'}
                                >
                                    <CircularProgressBase
                                    {...props}
                                    value={62}
                                    radius={42}
                                    activeStrokeColor={'#18dcff'}
                                    inActiveStrokeColor={'#18dcff'}
                                    children={<Energy height={47} width={47} />}
                                    />
                                </CircularProgressBase>
                            </CircularProgressBase>
                        </View>
                    </View>
                </View>

                <View className="flex px-[25px] pt-[20px]">
                    <View className="flex-row items-center gap-x-2" >
                        <Text className="text-[20px]" style={{fontFamily: 'RobotoMedium'}}>Enter the Glucose Level: </Text>
                        <TextInput value={glucose} onChangeText={setGlucose} keyboardType="numeric" placeholder={String(datas[0].sugar)} className="border-[2px] px-[10px] py-[3px] rounded-[10px] text-[18px] " style={{fontFamily: 'Roboto'}} />
                    </View>

                    <View className="border-[3px] border-[#736CD1] self-center rounded-[12px] p-[1px] mt-[20px] " >
                        <TouchableHighlight className="border-[1px] rounded-[8px] px-[10px] py-[5px] " underlayColor={'#bab6ed'} onPress={()=>{
                                let glucoseNumber = Number(glucose)    
                                if (glucoseNumber >= 55 && glucoseNumber < 70)
                                    setGlucoseLevel ("Low")
                                else if (glucoseNumber >= 70 && glucoseNumber < 120)
                                    setGlucoseLevel ("Moderate")
                                else if (glucoseNumber >= 120 && glucoseNumber <=300)
                                    setGlucoseLevel ("High")
                                else if (glucoseNumber < 55)
                                    setGlucoseLevel ("Immediate treatment required")
                                else if (glucoseNumber > 300)
                                    setGlucoseLevel ("Doctor Prescription is needed")

                                if (glucose != undefined)
                                setShowImage(true)
                            }}>
                            <Text className="text-[18px] font-[#fd4d5c] text-[#736CD1] " style={{fontFamily: 'RobotoBold'}}>Recommend</Text>
                        </TouchableHighlight>
                    </View>
                    
                    {showImage &&
                    <View>
                        {(glucoseLevel != 'Moderate' && glucoseLevel != 'High' && glucoseLevel != 'Low' ) 
                        ?
                            <View className="flex justify-center self-center mt-[40px] items-center  border-[1px] rounded-[8px] p-[3px] border-red-600 mb-[20px] ">
                                <View className="flex justify-center items-center  border-[1px] p-[10px] border-dashed border-red-600 ">
                                    <Text className="text-center text-[30px] leading-[45px] text-red-700 font-medium " style={{ fontFamily: 'RobotoMedium'}}>{glucoseLevel} !</Text>
                                </View>
                            </View>
                        :
                        <View className='mt-[20px] mb-[50px]'>
                            <Text className="text-[28px] self-center text-[#605ab2] mb-[15px]" style={{fontFamily: 'RobotoBold'}}>Blood Sugar : {glucoseLevel}</Text>
                            
                            <FoodImage glucoseLevel={glucoseLevel} type={'Starch'} />
                            <FoodImage glucoseLevel={glucoseLevel} type={'Fruit'} />                  
                            <FoodImage glucoseLevel={glucoseLevel} type={'Vegetable'} />
                            <FoodImage glucoseLevel={glucoseLevel} type={'Dairy'} />
                            <FoodImage glucoseLevel={glucoseLevel} type={'Snack'} />
                            
                        </View>}
                    </View>
                    }
                </View>
                </ScrollView>
            </View>

        :

        <View className="flex ">
            <View className='flex-row mx-[-5px] p-[7px] px-[15px] bg-[#635db7]'>
                <Pressable onPress={()=>{ setShowImage(false); setPage('')}} className=''><Ionicons name="chevron-back-circle-outline" className="text-white" size={54} color="white" /></Pressable>
                <View className="flex w-[80%] items-center justify-center">
                    <Text className='text-[28px] text-white' style={{fontFamily: 'RobotoBold'}}>NutriGluco Chef</Text>
                </View>
            </View>
            <ScrollView className="p-[20px] px-[30px]">
                <Text className="text-[30px] self-center text-[#5852ad]" style={{fontFamily: 'RobotoMedium'}} >Recommended Dish</Text>
                <Image source={Robot} width={50} height={50} className='w-[120px] ml-[-20px] mb-[-50px] h-[200px] self-center' />
                <Text className="text-[22px] px-[10px] " style={{fontFamily: 'Roboto'}}>{dishRecommendation}</Text>
            </ScrollView>
        </View>

    )
}

export default Home
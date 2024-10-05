import React, { useState, useLayoutEffect } from 'react';
import { Image, View, Pressable , Text, ActivityIndicator  } from "react-native";
import Modal from 'react-native-modal';
import axios from 'axios';

import * as FileSystem from 'expo-file-system';
import { decodeJpeg, bundleResourceIO  } from '@tensorflow/tfjs-react-native';

import LottieView from 'lottie-react-native';
import * as ImagePicker from 'expo-image-picker';
import * as tf from '@tensorflow/tfjs';


import CameraSVG from '../icons/camera.svg';
import Iconscamera from '../icons/icons8-camera.svg'
import Iconsgallery from '../icons/download.png'

export default PhotoScreenModal = ({setReload, setPage, modalVisible, setModalVisible, setDishRecommendation}) => {

    //model init
    const [model22, setModel22] = useState();
    const [model33, setModel33] = useState();
    const [modelFinal, setModelFinal] = useState();
    const [modelClassification, setModelClassification] = useState();
    
    const model22JSON = require("../assets/model/22/model.json");
    const model33JSON = require("../assets/model/33/model.json");
    const modelFinalJSON = require("../assets/model/final/model.json");
    const modelClassiJSON = require("../assets/model/EyeClassificationModel/model.json");
    
    const model22Weights = [] 
    const model33Weights = [] 
    const modelFinalWeights = [] 
    const modelClassiWeights = []
    
    const [permission, requestPermission] = ImagePicker.useCameraPermissions({});
    //console.log(permission);
    
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

{
    model22Weights.push(require("../assets/model/22/group1-shard1of3.bin"));
    model22Weights.push(require("../assets/model/22/group1-shard2of3.bin"));
    model22Weights.push(require("../assets/model/22/group1-shard3of3.bin"));

    model33Weights.push(require("../assets/model/33/group1-shard1of3.bin"));
    model33Weights.push(require("../assets/model/33/group1-shard2of3.bin"));
    model33Weights.push(require("../assets/model/33/group1-shard3of3.bin"));

    modelFinalWeights.push(require("../assets/model/final/group1-shard1of3.bin"));
    modelFinalWeights.push(require("../assets/model/final/group1-shard2of3.bin"));
    modelFinalWeights.push(require("../assets/model/final/group1-shard3of3.bin"));

    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard1of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard2of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard3of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard4of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard5of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard6of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard7of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard8of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard9of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard10of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard11of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard12of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard13of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard14of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard15of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard16of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard17of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard18of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard19of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard20of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard21of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard22of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard23of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard24of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard25of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard26of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard27of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard28of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard29of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard30of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard31of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard32of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard33of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard34of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard35of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard36of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard37of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard38of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard39of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard40of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard41of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard42of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard43of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard44of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard45of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard46of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard47of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard48of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard49of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard50of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard51of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard52of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard53of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard54of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard55of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard56of57.bin"));
    modelClassiWeights.push(require("../assets/model/EyeClassificationModel/group1-shard57of57.bin"));
}

    async function loadModel() {
        try {
            // For layered model
            console.log("loading model")

            const model22 = await tf.loadLayersModel(bundleResourceIO(model22JSON, model22Weights));
            setModel22(model22);

            const model33 = await tf.loadLayersModel(bundleResourceIO(model33JSON, model33Weights));
            setModel33(model33);

            const modelFinal = await tf.loadLayersModel(bundleResourceIO(modelFinalJSON, modelFinalWeights));
            setModelFinal(modelFinal);

            const modelClassi = await tf.loadLayersModel(bundleResourceIO(modelClassiJSON, modelClassiWeights));
            setModelClassification(modelClassi);

            console.log("Load model success")
        }catch (err) {
            console.log(err);
        }
    }

    useLayoutEffect(()=>{
        tf.ready().then(()=>{
            loadModel()
        });
    },[])

    useLayoutEffect(()=>{
        if (modalVisible=='') {
            if (error) {
                setImage(null)
            }
            setError(false)
        }
    },[modalVisible])

    const [image, setImage] = useState(null);
    
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.canceled) {
            setError(false);
            setImage(result.assets[0]);
        }
    };

    const takePhoto = async () => {
        const cameraResp = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
            base64: true,
        });

        if (!cameraResp.canceled) {
            setError(false);
            setImage(cameraResp.assets[0]);
        }
    };

    const predictImage = async () => {
        try {

            setLoading(true);

            await tf.ready();
            const imgB64 = await FileSystem.readAsStringAsync(image.uri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
            const raw = new Uint8Array(imgBuffer)
            const imageTensor = decodeJpeg(raw);

            const processedTensor = tf.image.resizeBilinear(imageTensor,[256,256]);
            const normalizedTensor = tf.sub(tf.div(processedTensor,255),0.5);

            const expandedTensor = normalizedTensor.expandDims();
            // if (processedTensor.shape.length == 3) processedTensor.shape.unshift(1);
            const predictionClassi = modelClassification.predict(expandedTensor).dataSync()[0];
            
            if (predictionClassi > 0.5){

                console.log(predictionClassi)
                const prediction22 = model22.predict(expandedTensor).dataSync()[0];
                const prediction33 = model33.predict(expandedTensor).dataSync()[0];
                const predictionFinal = modelFinal.predict(expandedTensor).dataSync()[0];
                const num = (prediction22+prediction33+predictionFinal)/3;
                const prediction = Math.round((num + Number.EPSILON) * 100) / 100;
                console.log(prediction);

                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                let d = new Date();
                let date = d.getDate()+" "+months[d.getMonth()]
                console.log(date);
                let year = d.getFullYear()
                let time = d.getHours() +":"+ d.getMinutes();

                const response = await fetch('https://visonary-glucometer-server.onrender.com/api/sugar/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 'sugar': prediction, date, year, time })
                })
                if (!response.ok) {
                    console.log("sugar content not registered!\n\n"+json.error)
                }
                else {
                    console.log("posted");
                    setReload(Math.random());
                }
                setPage(false);
                setImage(null)
                setModalVisible('');

            }
            else {
                setError(true);
                console.log("Not Eye !")
            }

            setLoading(false);

        }
        catch(e) {
            console.log(e);
        }
    }
    
    // Set your API key
    const apiKey = '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';

    // API endpoint
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    let prompt;
    
    const client = axios.create({
        headers: {
          Authorization: "Bearer " + apiKey,
        },
      });
      
      

    async function getDish() {
        
        let dishes = []

        const imgB64 = await FileSystem.readAsStringAsync(image.uri, {
            encoding: FileSystem.EncodingType.Base64,
        });
        axios({
            method: "POST",
            url: "https://detect.roboflow.com/aicook-lcv4d/3",
            params: {
                api_key: "TfvpIQ5FWKjtM6xthRDN"
            },
            data: imgB64,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            dishes = []
            response.data.predictions.map((ele)=> {
                dishes.push(ele.class)
            });
            console.log(dishes)
            const params = {
                prompt: `hi chatgpt I have sugar level of ${'normal'} and these are my ingredient ${dishes} in my kitchen suggest a food for this`,
                model: "text-davinci-003",
                max_tokens: 100,
                temperature: 0,
            };
            
            client
                .post("https://api.openai.com/v1/completions", params)
                .then((result) => {
                    console.log(result.data.choices[0].text);
                    setDishRecommendation(result.data.choices[0].text);
                    setImage(null)
                    setModalVisible('');
                })
                .catch((err) => {
                    console.log(err, err.response);
                });
            
        })
        .catch(function(error) {
            console.log(error.message);
        });

    }


    return (
        <>
        <Pressable  onPress={() => {setModalVisible('eye')}}
            className="h-[70px] w-[70px] bg-[#7b6cd1] border-[3px] border-[#635db7]  rounded-full justify-center items-center mt-[-15px] pb-[5px] " 
        >
            <CameraSVG height={47} width={47} />
        </Pressable>
        <View>
            <Modal
                backdropOpacity={0.3}
                isVisible={modalVisible=='eye' || modalVisible == 'fridge' }
                onBackdropPress={() => {setImage(null) ; setModalVisible(false)}}
                className="justify-end m-0"
            >
                <View className="bg-white justify-center items-center rounded-t-[20px]">
                    <Text className="flex " >
                        <View className="flex items-center justify-center pb-[40px] pt-[50px] gap-y-[20px]">
                            {(modalVisible=='fridge') &&
                                <Text className="text-[32px] pb-[10px] " style={{fontFamily: 'RobotoMedium'}} >NutriGluco Chef</Text>
                            }
                            <View className="flex-row gap-x-[10px]">
                                <View className="flex justify-center items-center" >
                                    <Text style={{ fontFamily: 'RobotoMedium'}}>Pick from gallery</Text>
                                    <Pressable title="Pick an image from camera roll" onPress={pickImage} >{/*className="border-[1px] border-dashed border-gray-500" >*/}
                                        <Image source={Iconsgallery} className="w-[170px] h-[170px] "></Image>
                                    </Pressable>
                                </View>
                                <View className="flex justify-center items-center" >
                                    <Text style={{ fontFamily: 'RobotoMedium'}}>Take a Photo</Text>
                                    <Pressable title="Take Picture" onPress={takePhoto} >{/*className="border-[1px] border-dashed border-gray-500">*/}
                                        <Iconscamera width={170} height={170} />
                                    </Pressable>
                                </View>
                            </View>

                            {(modalVisible=='eye') &&
                                <>
                                {(image && !error) && <>
                                    <View className="border-[1px] border-[#4c4c4c] rounded-[8px] p-[4px] mt-[10px]">
                                        <View className="border-[1px] border-[#4c4c4c] border-dashed p-[3px]">
                                            <Image source={{ uri: image.uri }} width={200} height={200}/>
                                        </View>
                                    </View>
                                    <Pressable onPress={()=>{ if(!loading) predictImage()}} className="bg-[#15184a] h-[45px] w-[100px] px-[10px] py-[5px] rounded-[7px] mt-[20px] flex justify-center items-center" >
                                        {(!modelClassification || loading) ?
                                            <LottieView
                                                autoPlay={true}
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                }}
                                                source={require('../assets/loader3dot.json')}
                                                // className="my-[-35px] ml-[-17px] "
                                            />
                                            : 
                                            <Text className="text-white font-medium text-[20px] text-center" style={{ fontFamily: 'RobotoMedium'}}>Predict</Text>
                                        } 
                                    </Pressable>
                                </>}
                                {error && 
                                    <View className="flex justify-center items-center  border-[1px] rounded-[8px] p-[3px] border-red-600 mb-[20px] ">
                                        <View className="flex justify-center items-center  border-[1px] p-[10px] border-dashed border-red-600 ">
                                            <Text className="text-center text-[18px] text-red-700 font-medium " style={{ fontFamily: 'RobotoMedium'}}>Eye Not Found!</Text>
                                            <Text className="text-center text-[18px] text-red-700 font-medium " style={{ fontFamily: 'RobotoMedium'}}>Please Select an Image with clear Eye</Text>
                                        </View>
                                    </View>
                                }
                                </>
                            }

                            {(modalVisible=='fridge') &&
                                <>
                                {(image && !error) && <>
                                    <View className="border-[1px] border-[#4c4c4c] rounded-[8px] p-[4px] mt-[10px]">
                                        <View className="border-[1px] border-[#4c4c4c] border-dashed p-[3px]">
                                            <Image source={{ uri: image.uri }} width={200} height={200}/>
                                        </View>
                                    </View>
                                    <Pressable onPress={()=>{ if(!loading) getDish()}} className="bg-[#15184a] h-[45px] w-[100px] px-[10px] py-[5px] rounded-[7px] mt-[20px] flex justify-center items-center" >
                                        {(loading) ?
                                            <LottieView
                                                autoPlay={true}
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                }}
                                                source={require('../assets/loader3dot.json')}
                                                // className="my-[-35px] ml-[-17px] "
                                            />
                                            : 
                                            <Text className="text-white font-medium text-[20px] text-center" style={{ fontFamily: 'RobotoMedium'}}>Get Dish</Text>
                                        } 
                                    </Pressable>
                                </>}
                                {error && 
                                    <View className="flex justify-center items-center  border-[1px] rounded-[8px] p-[3px] border-red-600 mb-[20px] ">
                                        <View className="flex justify-center items-center  border-[1px] p-[10px] border-dashed border-red-600 ">
                                            <Text className="text-center text-[18px] text-red-700 font-medium " style={{ fontFamily: 'RobotoMedium'}}>Couldn't recommend food!</Text>
                                            <Text className="text-center text-[18px] text-red-700 font-medium " style={{ fontFamily: 'RobotoMedium'}}>Please Select an Image with clear Eye</Text>
                                        </View>
                                    </View>
                                }
                                </>
                            }
                        </View>
                    </Text>
                </View>
            </Modal>
        </View>
        </>
    );
}

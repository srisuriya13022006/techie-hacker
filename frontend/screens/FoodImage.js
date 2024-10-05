import food1 from '../assets/food/1.jpeg'
import food2 from '../assets/food/2.jpeg'
import food3 from '../assets/food/3.jpeg'
import food4 from '../assets/food/4.jpeg'
import food5 from '../assets/food/5.jpeg'
import food6 from '../assets/food/6.jpeg'
import food7 from '../assets/food/7.jpeg'
import food8 from '../assets/food/8.jpeg'
import food9 from '../assets/food/9.jpeg'
import food10 from '../assets/food/10.jpeg'
import food11 from '../assets/food/11.jpeg'
import food12 from '../assets/food/12.jpeg'
import food13 from '../assets/food/13.jpeg'
import food14 from '../assets/food/14.jpeg'
import food15 from '../assets/food/15.jpeg'
import food16 from '../assets/food/16.jpeg'
import food17 from '../assets/food/17.jpeg'
import food18 from '../assets/food/18.jpeg'
import food19 from '../assets/food/19.jpeg'
import food20 from '../assets/food/20.jpeg'
import food21 from '../assets/food/21.jpeg'
import food22 from '../assets/food/22.jpeg'
import food23 from '../assets/food/23.jpeg'
import food24 from '../assets/food/24.jpeg'
import food25 from '../assets/food/25.jpeg'
import food26 from '../assets/food/26.jpeg'
import food27 from '../assets/food/27.jpeg'
import food28 from '../assets/food/28.jpeg'
import food29 from '../assets/food/29.jpeg'
import food30 from '../assets/food/30.jpeg'
import food31 from '../assets/food/31.jpeg'
import food32 from '../assets/food/32.jpeg'
import food33 from '../assets/food/33.jpeg'
import food34 from '../assets/food/34.jpeg'
import food35 from '../assets/food/35.jpeg'
import food36 from '../assets/food/36.jpeg'
import food37 from '../assets/food/37.jpeg'
import food38 from '../assets/food/38.jpeg'
import food39 from '../assets/food/39.jpeg'
import food40 from '../assets/food/40.jpeg'
import food41 from '../assets/food/41.jpeg'
import food42 from '../assets/food/42.jpeg'
import food43 from '../assets/food/43.jpeg'
import food44 from '../assets/food/44.jpeg'
import food45 from '../assets/food/45.jpeg'
import food46 from '../assets/food/46.jpeg'
import food47 from '../assets/food/47.jpeg'
import food48 from '../assets/food/48.jpeg'
import food49 from '../assets/food/49.jpeg'
import food50 from '../assets/food/50.jpeg'
import food51 from '../assets/food/51.jpeg'
import food52 from '../assets/food/52.jpeg'
import food53 from '../assets/food/53.jpeg'
import food54 from '../assets/food/54.jpeg'
import food55 from '../assets/food/55.jpeg'
import food56 from '../assets/food/56.jpeg'
import food57 from '../assets/food/57.jpeg'
import food58 from '../assets/food/58.jpeg'
import food59 from '../assets/food/59.jpeg'
import food60 from '../assets/food/60.jpeg'
import food61 from '../assets/food/61.jpeg'
import food62 from '../assets/food/62.jpeg'
import food63 from '../assets/food/63.jpeg'
import food64 from '../assets/food/64.jpeg'
import food65 from '../assets/food/65.jpeg'
import food66 from '../assets/food/66.jpeg'
import food67 from '../assets/food/67.jpeg'
import food68 from '../assets/food/68.jpeg'
import food69 from '../assets/food/69.jpeg'
import food70 from '../assets/food/70.jpeg'
import food71 from '../assets/food/71.jpeg'
import food72 from '../assets/food/72.jpeg'
import food73 from '../assets/food/73.jpeg'
import food74 from '../assets/food/74.jpeg'
import food75 from '../assets/food/75.jpeg'
import food76 from '../assets/food/76.jpeg'
import food77 from '../assets/food/77.jpeg'
import food78 from '../assets/food/78.jpeg'
import food79 from '../assets/food/79.jpeg'
import food80 from '../assets/food/80.jpeg'
import food81 from '../assets/food/81.jpeg'
import food82 from '../assets/food/82.jpeg'
import food83 from '../assets/food/83.jpeg'
import food84 from '../assets/food/84.jpeg'
import food85 from '../assets/food/85.jpeg'
import food86 from '../assets/food/86.jpeg'
import food87 from '../assets/food/87.jpeg'
import food88 from '../assets/food/88.jpeg'
import food89 from '../assets/food/89.jpeg'
import food90 from '../assets/food/90.jpeg'
import food91 from '../assets/food/91.jpeg'
import food92 from '../assets/food/92.jpeg'
import food93 from '../assets/food/93.jpeg'
import food94 from '../assets/food/94.jpeg'
import food95 from '../assets/food/95.jpeg'
import food96 from '../assets/food/96.jpeg'
import food97 from '../assets/food/97.jpeg'
import food98 from '../assets/food/98.jpeg'
import food99 from '../assets/food/99.jpeg'
import { Image, ScrollView, Text, View } from 'react-native'


const glucoseData = [[1,"Apple","Fruit",25,39,"Medium","Low",food1],
[2,"White Bread","Starch",20,75,"Small","High",food2],
[3,"Brown Rice","Starch",45,50,"Medium","Moderate",food3],
[4,"Ice Cream","Dairy",30,61,"Small","High",food4],
[5,"Chicken Breast","Starch",0,0,"Medium","Low",food5],
[6,"Pasta","Starch",40,40,"Medium","Moderate",food6],
[7,"Oatmeal","Starch",30,55,"Medium","Moderate",food7],
[8,"Banana","Fruit",27,62,"Small","Moderate",food8],
[9,"Yogurt","Dairy",15,41,"Small","Low",food9],
[10,"Chocolate Cake","Snack",60,78,"Small","High",food10],
[11,"Salmon","Starch",0,0,"Medium","Low",food11],
[12,"Quinoa","Starch",39,53,"Medium","Moderate",food12],
[13,"Orange","Fruit",15,43,"Small","Low",food13],
[14,"Whole Wheat Bread","Starch",15,51,"Small","Low",food14],
[15,"Rice Krispies","Starch",24,82,"Small","High",food15],
[16,"Lentils","Starch",20,28,"Small","Low",food16],
[17,"Blueberries","Fruit",14,53,"Small","Low",food17],
[18,"Cheeseburger","Starch",31,33,"Medium","Moderate",food18],
[19,"Spinach","Vegetable",1,0,"Medium","Low",food19],
[20,"Popcorn","Snack",22,72,"Small","High",food20],
[21,"Broccoli","Vegetable",6,15,"Medium","Low",food21],
[22,"Pineapple","Fruit",22,59,"Small","Low",food22],
[23,"French Fries","Starch",63,75,"Medium","High",food23],
[24,"Carrot","Vegetable",12,47,"Small","Low",food24],
[25,"Steak","Starch",0,0,"Medium","Low",food25],
[26,"Raisins","Starch",31,64,"Small","High",food26],
[27,"Tofu","Starch",2,0,"Medium","Low",food27],
[28,"Potato Chips","Snack",15,51,"Small","High",food28],
[29,"Turkey","Starch",0,0,"Medium","Low",food29],
[30,"Almonds","Starch",6,0,"Small","Low",food30],
[31,"White Rice","Starch",53,73,"Medium","High",food31],
[32,"Eggs","Starch",1,0,"Medium","Low",food32],
[33,"Grapes","Fruit",23,59,"Small","Moderate",food33],
[34,"Chocolate","Snack",22,49,"Small","Moderate",food34],
[35,"Avocado","Vegetable",8,15,"Medium","Low",food35],
[36,"Bagel","Starch",48,72,"Small","High",food36],
[37,"Milk","Dairy",12,39,"Small","Low",food37],
[38,"Pop Tarts","Snack",37,70,"Small","High",food38],
[39,"Pomegranate","Fruit",39,53,"Small","Moderate",food39],
[40,"Pizza","Snack",38,60,"Medium","High",food40],
[41,"Peanuts","Starch",6,14,"Small","Low",food41],
[42,"Watermelon","Fruit",6,72,"Medium","Low",food42],
[43,"Cucumber","Vegetable",2,0,"Medium","Low",food43],
[44,"Gummy Bears","Snack",21,78,"Small","High",food44],
[45,"Cauliflower","Vegetable",5,15,"Medium","Low",food45],
[46,"Honeydew Melon","Fruit",15,64,"Small","Low",food46],
[47,"Muffin","Snack",25,55,"Small","High",food47],
[48,"Cereal","Starch",20,65,"Medium","Moderate",food48],
[49,"Shrimp","Starch",0,0,"Medium","Low",food49],
[50,"Pear","Fruit",27,38,"Small","Low",food50],
[51,"Turkey Sandwich","Starch",40,57,"Medium","Moderate",food51],
[52,"Cottage Cheese","Dairy",6,10,"Small","Low",food52],
[53,"Sushi","Starch",25,55,"Small","Moderate",food53],
[54,"Sweet Potato","Starch",21,70,"Medium","Moderate",food54],
[55,"Blueberry Muffin","Snack",55,59,"Small","High",food55],
[56,"Green Beans","Vegetable",4,15,"Medium","Low",food56],
[57,"Chocolate Bar","Snack",24,70,"Small","High",food57],
[58,"Asparagus","Vegetable",3,0,"Medium","Low",food58],
[59,"Kiwi","Fruit",14,52,"Small","Low",food59],
[60,"Zucchini","Vegetable",3,0,"Medium","Low",food60],
[61,"Almond Butter","Starch",3,0,"Small","Low",food61],
[62,"Raspberries","Fruit",5,40,"Small","Low",food62],
[63,"Ravioli","Starch",33,39,"Medium","Moderate",food63],
[64,"Orange Juice","Starch",26,50,"Small","Moderate",food64],
[65,"Bell Pepper","Vegetable",6,0,"Medium","Low",food65],
[66,"Croissant","Starch",31,67,"Small","High",food66],
[67,"Tuna","Starch",0,0,"Medium","Low",food67],
[68,"Cabbage","Vegetable",5,0,"Medium","Low",food68],
[69,"Cinnamon Roll","Snack",59,77,"Small","High",food69],
[70,"Radish","Vegetable",2,0,"Small","Low",food70],
[71,"Pancakes","Starch",29,67,"Small","High",food71],
[72,"Pork Chop","Starch",0,0,"Medium","Low",food72],
[73,"Spaghetti","Starch",31,42,"Medium","Moderate",food73],
[74,"Pear","Fruit",26,41,"Small","Low",food74],
[75,"Milkshake","Dairy",50,111,"Small","High",food75],
[76,"Cheddar Cheese","Dairy",0,0,"Small","Low",food76],
[77,"Bagel with Cream Cheese","Starch",52,72,"Small","High",food77],
[78,"Cherries","Fruit",18,22,"Small","Low",food78],
[79,"Mashed Potatoes","Starch",35,73,"Small","High",food79],
[80,"Green Apple","Fruit",21,39,"Small","Low",food80],
[81,"Pork Ribs","Starch",0,0,"Medium","Low",food81],
[82,"Blueberry Pancakes","Snack",38,68,"Small","High",food82],
[83,"Onion","Vegetable",14,0,"Small","Low",food83],
[84,"Caesar Salad","Starch",17,0,"Medium","Low",food84],
[85,"French Toast","Snack",26,88,"Small","High",food85],
[86,"Zucchini Bread","Starch",23,49,"Small","Moderate",food86],
[87,"Hot Dog","Starch",2,0,"Medium","Low",food87],
[88,"Apple Juice","Starch",28,41,"Small","Low",food88],
[89,"Corn","Starch",21,60,"Small","Moderate",food89],
[90,"Pecans","Starch",4,20,"Small","Low",food90],
[91,"Vanilla Ice Cream","Dairy",18,57,"Small","High",food91],
[92,"Beef Jerky","Starch",5,0,"Small","Low",food92],
[93,"Fig","Starch",10,61,"Small","Low",food93],
[94,"Baguette with Butter","Starch",60,95,"Small","High",food94],
[95,"Scrambled Eggs","Starch",1,0,"Small","Low",food95],
[96,"Honey","Starch",17,58,"Small","High",food96],
[97,"Nachos","Snack",50,72,"Medium","High",food97],
[98,"Walnuts","Starch",4,15,"Small","Low",food98],
[99,"Blue Cheese","Dairy",2,0,"Small","Low", food99]]

export default function FoodImage({glucoseLevel, type}) {
    
    let sugar = 'Moderate';
    if (glucoseLevel == 'Low') sugar = 'High';
    else if (glucoseLevel == 'High') sugar = 'Low';
    let noElements = true;
    for (let i=0; i<=98; i++) {
        if (glucoseData[i][6] == sugar && glucoseData[i][2]==type) {
            noElements = false;
        }
    }
    if (noElements) {
        return <></>
    }
    return(
        <View>
            <Text className="text-[25px] mb-[15px]" style={{fontFamily:'RobotoMedium'}}>{type}</Text>
            <ScrollView className="h-[200px] flex-row gap-x-[10px]" horizontal={true}>
                {glucoseData.map((ele)=>{
                    if (ele[6] == sugar && ele[2]==type) {
                        return <View key={ele[0]}>
                            <Image source={ele[7]}  className='w-[130px] h-[130px] rounded-[25px]'/>
                            <Text>{ele[1]}</Text>
                            </View>
                    }
                })}
            </ScrollView>
        </View>
        
    );
}
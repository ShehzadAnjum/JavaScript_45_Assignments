var aNo = 24;

function assignNo(asignName)
{
    heading="///// ---- Assignment No. "+ (++aNo)+ " ("+asignName +")  ---- \\\\\\\\\\"
    console.log("\n"+heading);
    console.log(Array(heading.length+2).join("-"));
}

//Assignment # 25: Alien Colors #1
assignNo("Alien Colors #1");
let alien_color = "Green";
console.log("\n<<Current Alien Color="+alien_color+">>");
console.log(alien_color=='Green'?"You shot Green Alian, you earned +5 points":"");

alien_color = "Red";
console.log("\n<<Current Alien Color="+alien_color+">>");
console.log(alien_color=='Green'?"You shot Green Alian, you earned +5 points":"");

//Assignment # 26: AAlien Colors #2
assignNo("Alien Colors #2");
alien_color="Green"
console.log("\n<<Current Alien Color="+alien_color+">>");


if(alien_color == "Green")
    console.log("The Alien was Green, you earned +5 points");
else   
    console.log("The Alien wansn't green, you earned +10 points");

alien_color = "Red";
console.log("\n<<Current Alien Color="+alien_color+">>");
    if(alien_color == "Green")
    console.log("The Alien was Green, you earned +5 points");
else   
    console.log("The Alien wansn't green, you earned +10 points");


//Assignment # 27: Alien Colors #3
assignNo("Alien Colors #3");
let alienColor = ["Green","Red","Yellow"]
for(i=0;i<3;i++)
{
    console.log("\n<<Current Alien Color="+alienColor[i]+">>");
    if(alienColor[i]=="Green")
        console.log("The Alien was Green, you earned +5 points");
    else if(alienColor[i]=="Red")
        console.log("The Alien was Red, you earned +15 points");
    else if(alienColor[i]=="Yellow")
        console.log("The Alien was Yellow, you earned +10 points");
}

//Assignment # 28: Stages of Life
assignNo("Stages of Life");
var age = [1,2,3,4,12,13,17,20,63,65,70]

for(i=0;i<age.length;i++)
{
    if(age[i]>0&&age[i]<2)
        console.log("age:"+age[i]+" The person is a baby");
    if(age[i] >=2 && age[i]<4)
        console.log("age:"+age[i]+" The person is toddler");
    if(age[i] >=4 && age[i]<13)
        console.log("age:"+age[i]+" The person is a kid");
    if(age[i]>= 13 && age[i]<20)
        console.log("age:"+age[i]+" The person is teenager");
    if(age[i]>=20 && age[i]<65)
        console.log("age:"+age[i]+" The person is adult");
    if(age[i]>=65)
        console.log("age:"+age[i]+" The person is elder");
}

//Assignment # 29: Favorite Fruit
assignNo("Favorite Fruit");
favFruit=['Apple','Mango','Grapes','Peach'];

foundGrapes=false;
foundApple=false;
foundPeach=false;

for(i=0;i<favFruit.length;i++)
{   if(favFruit[i]=='Grapes')
        foundGrapes=true;
    if(favFruit[i]=='Apple')
        foundApple=true;
    if(favFruit[i]=='Peach')
    foundPeach=true;
} 
    if(foundGrapes)
        console.log("Grapes is found!");
    if(foundApple)
        console.log("Apple is found!");
    if(foundPeach)
        console.log("Peach is found!");

fruits = ['PineApple','Apple','Banan','Grapes','Orange','Peach','Mango','kiwi']

console.log("Available fruits : "+fruits)
console.log("My favourate fruits :"+favFruit)
for(i=0;i<fruits.length;i++)
{
    for(fr of favFruit)
        if(fr==fruits[i])
            console.log("I really like "+ fruits[i]);
}

//Assignment # 30: Hello Admin
assignNo("Hello Admin");
var UserNames=['shehzad', 'anjum','admin','ejaz','rehan'];

for(un of UserNames)
{
    if(un=='admin')
        console.log("Hello admin, would you like to see a status report ?");
    else
        console.log("Hello "+un+", thankyou for logging in again")
}

//Assignment # 31: No Users
assignNo("No Users");
UserNames.length=0;

if(!UserNames.length)
    console.log("The current list of users is empty, We need to find some users!");

//Assignment # 32: Checking Usernames
assignNo("Checking Usernames");
var usersList = ['shehzad', 'anjum','admin','ejaz','rehan'];
var newUsers = ['arshad','Ejaz','imran','SHEHZAD','fakhir'] ;

console.log("Registered user list: "+usersList);
console.log("New user list: "+newUsers);

var userExist=false
for(i=0;i<newUsers.length;i++)
{
    userExist=false;
    for(usr of usersList)
        if(usr.toLowerCase() == newUsers[i].toLowerCase())
        {   userExist=true;
            break;
        }    
    
    if(userExist)
        console.log("?? => User "+newUsers[i]+ " already exit, choose another username");
    else
        console.log("New user "+newUsers[i]+ " added sucessfully!");
}

//Assignment # 33: Ordinal Numbers
assignNo("Ordinal Numbers");
var nums = [,1,2,3,4,5,6,7,8,9]
var ordinalNum = [,'st','nd','rd'];

// ---------with if else ---- //
console.log("--- with if-else block ----");
for(i=1;i<10;i++)
{
    if (nums[i]==1)ord="st";
    else if (nums[i]==2)ord="nd";
    else if(nums[i]==3)ord="rd";
    else ord="th";
    console.log(nums[i]+ord);
}
    
//------- without if else (ternary operator)---- //
console.log("\n---- using ternary operator ----");
for(i=1;i<10;i++)
{
    console.log(nums[i] + (nums[i]<4?ordinalNum[i]:"th"));
}

//Assignment # 34: Pizzas
assignNo("Pizzas");
var pizza = ["Fajita","Super Supereme","Sicillian"];
for(i=0;i<pizza.length;i++)
    console.log(pizza[i]);

console.log("");

for(i=0;i<pizza.length;i++)
    console.log("I like " + pizza[i]);

console.log("\ni really love pizza ,but with lot of mushrooms and veges");
console.log("i do not like the spicy one");
console.log("Sometime i like deep pan, but sometime i do like thin crust")
console.log("Pizza with lot of cheese and vege+chicken is a great food");

//Assignment # 35: Animals
assignNo("Animals");
animals = ['Dog','Cat','Sheep'];
for(i=0;i<animals.length;i++)
    console.log("I like " + animals[i]);

console.log(animals[0] + " is very loyal animal");
console.log(animals[1]  + " is very cute and good pet");
console.log(animals[2] + " is very friendly and playfull as well"); 
console.log("All these animals are firendly playful and are proven to be good pets");

//Assignment # 36: T-Shirt
assignNo("T-Shirt");

make_shirt("XXL","Quetta Gladitors");

function make_shirt(size, shirtText)
{
    console.log("The size of shirt should be : "+size + " and The text need to be printed on T_Shirt should be: \""+shirtText+"\"");
}

//Assignment # 37: Large Shirts
assignNo("Large Shirts");
make_another_shirt();   //will use default values   
make_another_shirt("Medium","this will be replaced");   //Medium text will also be replaced
make_another_shirt("Small","I love Turkey");            // This will print as is

function make_another_shirt(size = "Large", shirtText="I love JavaScript")
{
    //console.log("The size of shirt should be:"+size);
    if(size == "Large" || size=="Medium")
        console.log("On a " + size + " T-Shirt, Print the text: \" I Love JavaScript\"");    
    else
        console.log("On a " + size +"T-Shirt, Print : \""+shirtText + "\"");
}

//Assignment # 38: Cities
assignNo("Cities");
countries = ['Australia','Turkey','Britian','Japan']
cities = ['Sydney','Istanbul','London','Tokoyo','Karachi','Lahore'];

for(i=0;i<cities.length;i++)
    describe_city(cntry=i<=countries.length?countries[i]:undefined,cities[i]) //if countries array length is < = i then send country
                                                                              //else send undefined and the function will print default values

function describe_city(cntry='Pakistan',cty)
{
    console.log(cty+" is in "+cntry)
}

//Assignment # 39: city Names
assignNo("City Names");
console.log(city_country('Karachi','Pakistan'));
console.log(city_country('London','Britan'));
console.log(city_country('Istanbul','Turkey'));

function city_country(city, country)
{
    return(city+", "+country);
}

//Assignment # 39(1) city Names (did at my own, search a city and return country)
console.log("\n### Assignment No. "+ (aNo)+ "(b) ###  -- did at my own, will input city and return country from dictionary");

console.log(city_countries('London'));
console.log(city_countries('Istanbul'));
console.log(city_countries('Tokyo'));
console.log(city_countries('Sydeny'));


function city_countries(city)
{
    dict = {Sydeny:'Australia',Istanbul:'Turkey',London:'Britan',Tokyo:'Japan'};
    return(city+", "+dict[city]);
}


//Assignment # 40: Album
assignNo("Album");
_alb = make_album('Pink Noise','Laura Mvula');
console.log ("Album  1 without track ::: Album name ="+ _alb.al_name + ", Artist = " +_alb.artist);
_alb = make_album('Montero','Lil Nas X');
console.log ("Album  2 without track ::: Album name ="+ _alb.al_name + ", Artist = " +_alb.artist);
_alb = make_album('Planet','Joja Cat');
console.log ("Album  3 without track ::: Album name ="+ _alb.al_name + ", Artist = " +_alb.artist);

_alb = make_album('Skin','Joy Crookes',13);
console.log ("Album  4 WITH track (using overloading) ::: Album name ="+ _alb.al_name + ", Artist = " +_alb.artist+ ", Tacks = "+_alb.track);


_alb = make_album2('Fetch the Bolt Cutters', 'Fiona Apple')
console.log ("Album  5 without track (without overloading) ::: Album name ="+ _alb.al_name + ", Artist = " +_alb.artist);
_alb = make_album2('Fetch the Bolt Cutters', 'Fiona Apple',15)
console.log ("Album  6 with track (without overloading) ::: Album name ="+ _alb.al_name + ", Artist = " +_alb.artist+ ", Tacks = "+_alb.track);

function make_album(albumName, Artist)
{
    var album = {
                    artist: Artist,
                    al_name: albumName
                };   
    return album;
}

function make_album(albumName, Artist, Track)
{
    var album = {
                    artist: Artist,
                    al_name: albumName,
                    track: Track
                }
    return album;
}

function make_album2(Artist, albumName, Track)
{
    var album = {
                    artist: Artist,
                    al_name: albumName,
                }   
    
                if(Track)
                    album.track = Track;

    return album;
}

//Assignment # 41: Magicians
assignNo("Magicians");
var magicians=['Copperfield','Henning','Siegfried','Lance','Ricky'];

printMagicians(magicians);

function printMagicians(magNames)
{
    var i=0;
    var ov='';
    for(mg of magNames)
    {
        ov=(nums[++i]<4?ordinalNum[i]:"th");
        console.log("The "+i+ov+" Magician is "+mg);
    }
}

//Assignment # 42: Great Magicians
assignNo("Great Magicians");

make_great(magicians);
printMagicians(magicians);

function make_great(magNames)
{
    for(i=0;i<magNames.length;i++)
        magNames[i]="Great "+ magNames[i];
}

function printMagicians(Magicians)
{
    for(gmg of Magicians)
        console.log(gmg);
}

//Assignment # 43: Unchanged Magicians
assignNo("Unchanged Magicians");
var magiciansOrig=['Copperfield','Henning','Siegfried','Lance','Ricky'];
var magiciansGreat=[];
make_great2(magiciansOrig);
console.log("------- Below is the changed Array (with GREAT) ------------")
printMagicians2(magiciansGreat);
console.log("------- Below is the Original Array ------------------------")
printMagicians2(magiciansOrig);

function make_great2(magicians)
{
    for(i=0;i<magicians.length;i++)
        {   great = "Great "+ magicians[i]
            magiciansGreat.push(great);
        }
}

function printMagicians2(Magicians)
{
    for(gmg of Magicians)
        console.log(gmg);
}

//Assignment # 44: Sandwitches
assignNo("Sandwiches");
makeSandwitch(['tomatoo','egg']);
makeSandwitch(['tomatoo','egg','lettuce']);
makeSandwitch(['tomatoo','egg','lettuce','Chicken']);
makeSandwitch(['tomatoo','egg','lettuce','Chicken','black pepper']);

function makeSandwitch(ingreds)
{
    var allInged="";
    for(ingred of ingreds)
        allInged+=ingred+", ";    
    
    console.log("Prepare a sandwitch with these ingredents : "+ allInged.slice(0,-2));
}

//Assignment # 45: Cars
assignNo("Cars");

xtraInfo={'Color':'Gray',
        'Engine Type':'30.0 Ltr Diesel',
        'Engine Displacement':'4997 cc',
        'Max Torque ':'650nm@1500-2500rpm'};

TheCar = car('Land Rover','Defender',xtraInfo); 

for(const [key,value] of Object.entries(TheCar))
    console.log(key+" : "+value);

function car(manuf, model,obj)
{
    TheCar={'Manufacturer':manuf,'Model':model}
    
    for(const [key,value] of Object.entries(obj))
        TheCar[key] = value;
    return TheCar
}
// The function will print ### Assignment No. (Assignment Name) ###
function assignNo(asignName)
{
    heading="///// ---- Assignment No. "+ (++aNo)+ " ("+asignName +")  ---- \\\\\\\\\\"
    console.log("\n"+heading);
    console.log(Array(heading.length+2).join("-"));
}

//Assignment #1 : Install VS Code and Node JS -> Done!

var aNo = 0;
var aName= "";

assignNo("Install Node.js and VS Code");    
console.log("VS Code and Node JS installed");

//Assignment # 3: Personal Message
assignNo("Personal Message"); 
var person = "Shehzad Anjum";
console.log ("Hello "+person+" would you like to learn some Python doday?");


//Assignment # 3: Name Cases
assignNo("Name Cases");
person = "muhaMMAd shEHzAd anJUm";
console.log("Actual name string : "+person);
console.log("Name in Lower Case : " + person.toLowerCase());


person = person.toLowerCase();

var _split =  Object.values(person.split(' '));

var TCase="";
for(part of _split)
    {TCase += part[0].toUpperCase() + part.slice(1,) + " "};

console.log("Title case name = "+TCase);

//Assignment # 4 :Famous Quote:
assignNo("Famous Quote:");
console.log("Prophet Muhammad S.A.W once said, \"I leave behind me two things, The Quran and My Sunnah and if you follow these you will never go astray.\"");

//Assignment # 5: Famous Quote 2
assignNo("Famous Quote 2");
var famous_person = "Prophet Muhammad S.A.W";
var message = "\"I leave behind me two things, The Quran and My Sunnah and if you follow these you will never go astray.\""
console.log(famous_person+ " once said, "+ message)

//Assignment # 6 : Stripping Names
assignNo("Stripping Names");
var personName = "\t\tSheh za\td An\nj\nu\tm \t\n";     //Name is spaced with tabs and spaces
console.log("person name at actual with spaces " + personName); //print the actual text
console.log("after removing all spaces : " + personName.replace(/ |\r\n|\n|\r|\t/gm, ''));  //using replace replaced all tabs and spaces

//Assignment # 7 : Number Eight
assignNo("Number Eight");
console.log("5+3="+(5+3));  //to get eight add 5+3
console.log("11-3="+(11-3));    //to get 8 substract 3 from 11
console.log("2x4="+2*4);        // to get 8 multiply 2 by 4
console.log("64/8="+64/8);      // to get 8 divide 64 by 4

//Assignment # 8: create four lines 
assignNo("Create four lines ");
for(i=0;i<4;i++)
    console.log(5+3);

//Assignment # 9 : Favorite Number
assignNo("Favorite Number");
var favNumber = 77;
console.log("My favourate number is "+favNumber);

//Assignment # 10 : Adding Comments
assignNo("Adding Comments");
console.log("I have commented all code");

//Assignment # 11 : Names: Store the names
assignNo("Names: Store the names");
friends = ["Ejaz","Rehan","Tahir","Waseem","Sajid"]
for(i=0;i<friends.length;i++)
    console.log("Friend("+i+")"+friends[i])

//Assignment # 12 : Greetings.
assignNo("Greetings");
for(i=0;i<friends.length;i++)
    console.log("Friend("+i+")"+friends[i] + " is a nice guy")


//Assignment # 13 : Your Own Array
assignNo("Your Own Array");
transport = ['motor bike', 'car', 'aeroplane', 'jetski'];
statement = ["I like to drive", 'i love to drive', 'i dream to fly', 'it\'s fun to ride'];

for(i = 0;i<statement.length;i++)
    console.log(statement[i]+ " " + transport[i]);

//Assignment #14 : Guest List
assignNo("Guest List");
invite = ", It wold be my pleasure to see you in my party ! "
for(i = 0;i<statement.length;i++)
    console.log("Dear "+friends[i] + invite);

//Assignment #15 : Changing Guest List
assignNo("Changing Guest List");
console.log("--------- Original List --------");
for(i = 0;i<statement.length;i++)
    console.log("Dear "+friends[i] + invite);
console.log("\n==> Tahir is not available, replacing him with Ali\n");
var repl_num = 2;
var indicator;
friends[repl_num] = "Ali";
console.log("--------- Changed List --------");
for(i = 0;i<statement.length;i++)
    {   if(i==repl_num)  indicator="==> "; else indicator ="";
        console.log(indicator +"Dear "+friends[i] + invite);}

//Assignment #16 : More Guests.
assignNo("More Guests");
for(i = 0;i<statement.length;i++)
        console.log(indicator +"Dear "+friends[i] + invite);
console.log("----Found a bigger table add few more guests-------");
friends.unshift("Irfan");
friends.splice(3,0,"Imran");
friends.push("Arshad");

for(i = 0;i<friends.length;i++)
            console.log("Dear "+friends[i] + invite);

//Assignment #17 : Shrinking Guest List
assignNo("Shrinking Guest List");
for(i=friends.length-1; i>1; i--)
    console.log("Dear "+friends.pop()+ " Sorry, you are no longer invited, apology for that !");

    for(i=0;i<friends.length;i++)
        console.log("Hi Dear "+friends[i]+ ", you are still on my invite list, will happy to see you !");

    for(i=0;i<friends.length+1;i++)
        console.log(friends.pop()+ " removed !");

    console.log(friends.length + " in the list now !, all removed")

//Assignment #18 : Seeing the World
assignNo("Seeing the World");
console.log("------- Original List ----");
var places  = ['Turkey(1)','Spain(2)','Saudi Arabia(3)','USA(4)','China(5)'];
for(p  of places)
    console.log(p);

let s_places = places.slice().sort();
s_places.sort();
console.log("------- Sorted List ----");
for(p  of s_places)
    console.log(p);

console.log("------- Original List remain unchanged ----");
for(p  of places)
    console.log(p);

console.log("------- Sorted decending List ----");
s_places.reverse();
for(p  of s_places)
    console.log(p);

console.log("------- Original List remain unchanged ----");
for(p  of places)
    console.log(p);

console.log("------- Reversing the original order list ----");
    places.reverse();
    for(p  of places)
        console.log(p);
console.log("------- Changing back to original order list ----");
    places.reverse();
    for(p  of places)
        console.log(p);
console.log("------- Sorting the original order list alphabetically ----");
    places.sort();
    for(p  of places)
    console.log(p);
console.log("------- decending alphabet sort original order list ----");
    places.reverse();
    for(p  of places)
    console.log(p);

//Assignment #19 : Dinner Guests
assignNo("Dinner Guests");
friends = ["Ejaz","Rehan","Tahir","Waseem","Sajid"]
console.log("There are total "+friends.length + " guests in my list");

//Assignment #20 : Think of something you could store in a array.
assignNo("Think of something you could store in a array");
var mountain = ['Mount Everest','K2','Kangchenjunga','Lhotse','Makalu','Cho Oyu', 'Dhaulagiri I']
console.log("List of top mountains in the world:\n"+mountain.join(" , "));

//Assignment #21 : Then think of something you could store in a JavaScript Object
assignNo("Then think of something you could store in a JavaScript Object");

console.log("List of countries in the world:\n")
    let country = [
    {   cName : "Pakistan",
        population  : 220892340,
        worldShare  : "2.8%",
        landArea  : 770880
    },
    {    cName : "Hungry",
        population  : 9660351,
        worldShare  : "0.1",
        landArea  : 90530
    }, 
    {   cName : "Vietnam",
        population  : 97338579,
        worldShare  : "1.2%",
        landArea  : 310070
    }]

    console.log("List of Countries:");
    for(cntry of country)
    {
        console.log("Country Name: "+cntry.cName);
        console.log("Population: "+cntry.population);
        console.log("World Share: "+cntry.worldShare);
        console.log("landArea: "+cntry.landArea+"\n");
    }
    

//Assignment #22 : Intentional Error: .
assignNo("Intentional Error: ");
console.log("Called The 7th element of Array Mountains, whereas its's lenght is 7 and will produce error");
console.log(mountain);
console.log("seventh element = "+mountain[7]);



//Assignment #23 : Conditional Tests
assignNo("Conditional Tests");

let lang = 'Python'

console.log("Is Language("+lang+") == \'Pythn\' ? "+(lang =='Pythn'?true:false));
console.log("Is Language("+lang+") == \'C-Lang\' ? "+(lang =='python'?true:false));
console.log("Is Language("+lang+") == \'Python\' ? "+(lang =='Python'?true:false));
console.log("Is the Language("+lang+") start with \'C\' ?"+(lang.charAt(0)=='C'?true:false));
console.log("Is the Language("+lang+") start with \'P\' ?"+(lang.charAt(0)=='P'?true:false));
console.log("Is Language("+lang+") end with \'m\' ?"+(lang.charAt(lang.length-1)=='n'?true:false));
console.log("Is the Language("+lang+") end with \'n\' ?"+(lang.charAt(lang.length-1)=='m'?true:false));
console.log("Is the Language("+lang+") end with \'n\' ?"+(lang.charAt(lang.length-1)=='n'?true:false));
console.log("Is the Language("+lang+") has 11 characters ? "+(lang.length==6?true:false));
console.log("Is the Language("+lang+") has 6 characters ? "+(lang.length==6?true:false));

//Assignment #24 : More Conditional Tests
assignNo("More Conditional Tests");
console.log("Is the Language("+lang+") contains \'eh\' ? "+(lang.indexOf('eh')>0?true:false));
console.log("Is the Language("+lang+") contains \'th\' ? "+(lang.indexOf('th')>0?true:false));
console.log("Is the Language("+lang+") First char is lowercase ? "+(lang[0].toLowerCase() == lang[0]?true:false));
console.log("Is the Language("+lang+") First char is Uppercase ? "+(lang[0].toUpperCase() == lang[0]?true:false));
console.log("Is the Language("+lang+") 3rd char is \'t\' OR \'q\' ? "+(lang[2] == 'q'||lang[2] == 't'?true:false));
console.log("Is the Language("+lang+") 4th char is not equal to \'h\' ? "+(lang[3] != 'h'?true:false));
console.log("Is the Language("+lang+") has less than 7 characters ? "+(lang.length<7?true:false));
console.log("Is the Language("+lang+") has greater than 8 characters ? "+(lang.length>8?true:false));
console.log("Is the Language("+lang+") variable is of type array ? "+(Array.isArray(lang)?true:false));
console.log("Is the Mountains variable("+mountain+") is of type array ? "+(Array.isArray(mountain)?true:false));
console.log(Array.isArray(mountain));
function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

//loadjscssfile("myscript.js", "js") //dynamically load and add this .js file
//loadjscssfile("javascript.php", "js") //dynamically load "javascript.php" as a JavaScript file
//loadjscssfile("mystyle.css", "css") ////dynamically load and add this .css file


//source 
// https://stackoverflow.com/questions/5751620/ways-to-add-javascript-files-dynamically-in-a-page
// https://stackoverflow.com/a/5762713/13861187
//////////////////////////////////////////////////////////////////////////////////

//Split the string with the spread ... operator instead of .split(''):

//'🌯🌯🍣🍻'.split('')
//=> ["\ud83c", "\udf2f", "\ud83c", "\udf2f", "\ud83c", "\udf63", "\ud83c", "\udf7b"]
//vs

//[...'🌯🌯🍣🍻']
//=> ["🌯", "🌯", "🍣", "🍻"]
//vs

//'🌯'.charAt(0)
//=> "\ud83c"
//Then reduce:

[...'🌯🌯🍣🍻'].reduce((m, c) => (m[c] = (m[c] || 0) + 1, m), {})
//=> {'🌯': 2, '🍣': 1, '🍻': 1}



//source 
// https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string
// https://stackoverflow.com/a/68402128/13861187
//////////////////////////////////////////////////////////////////////////////////



function Char_Count(str1) {
    var chars = {};
    str1.replace(/\S/g, function(l){chars[l] = (isNaN(chars[l]) ? 1 : chars[l] + 1);});
    return chars;
}

//var myString = "This is my String";
//console.log(Char_Count(myString));


//source 
// https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string
// https://stackoverflow.com/a/46297978/13861187
//////////////////////////////////////////////////////////////////////////////////



function countChrOccurence ('hello') {
 let charMap = new Map();
 const count = 0;
  for (const key of str) {
   charMap.set(key,count); // initialize every character with 0. this would make charMap to be 'h'=> 0, 'e' => 0, 'l' => 0, 
  }

  for (const key of str) {
    let count = charMap.get(key);
    charMap.set(key, count + 1);
  }
// 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1

  for (const [key,value] of charMap) {
    console.log(key,value);
  }
// ['h',1],['e',1],['l',2],['o',1]
}  



//source 
// https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string
// https://stackoverflow.com/a/62781405/13861187
//////////////////////////////////////////////////////////////////////////////////


function countChar(str) {
    let myObj= {};
    for (let s of str) {
        if ( myObj[s] ? myObj[s].count ++ : myObj[s] = { count : 1 } );
    }
    return myObj;
}

var charCount = countChar('abcceddd');


//source 
// https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string
// https://stackoverflow.com/a/67044262/13861187
//////////////////////////////////////////////////////////////////////////////////

let str = "atul kumar srivastava";
let obj ={};
for(let s of str)if(!obj[s])obj[s] = 1;else obj[s] = obj[s]  + 1;
console.log(obj)



//source 
// https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string
// https://stackoverflow.com/a/60648545/13861187
//////////////////////////////////////////////////////////////////////////////////



const k = 5;
const dict = {
  "x" : 1,
  "y" : 6,
  "z" : 9,
  "a" : 5,
  "b" : 7,
  "c" : 11,
  "d" : 17,
  "t" : 3
};

const compare = (a, b) => {
    if(a > b) return -1;
    if(a < b) return 1;
    return 0
};

// Object.entries() to convert the dict to: [["x",3],["y",1],["z",2]]
let arr = Object.entries(dict).sort((a, b) => compare(a[1], b[1]));

// Getting the first k = 5 biggest elements:
let biggestElemsArr = [];
for(let j = 0; j < k; j++) {
    biggestElemsArr.push(arr[j][0]);
}

console.log(biggestElemsArr);const k = 5;
const dict = {
  "x" : 1,
  "y" : 6,
  "z" : 9,
  "a" : 5,
  "b" : 7,
  "c" : 11,
  "d" : 17,
  "t" : 3
};

const compare = (a, b) => {
    if(a > b) return -1;
    if(a < b) return 1;
    return 0
};

// Object.entries() to convert the dict to: [["x",3],["y",1],["z",2]]
let arr = Object.entries(dict).sort((a, b) => compare(a[1], b[1]));

// Getting the first k = 5 biggest elements:
let biggestElemsArr = [];
for(let j = 0; j < k; j++) {
    biggestElemsArr.push(arr[j][0]);
}

console.log(biggestElemsArr);



//source
// https://stackoverflow.com/questions/25500316/sort-a-dictionary-by-value-in-javascript
// https://stackoverflow.com/a/75086038/13861187
//////////////////////////////////////////////////////////////////////////////////




const sortObjectByValues = (dict: { [key: string]: number }, direction: 'asc'| 'desc' = 'asc') => {
  return Object.fromEntries(Object.entries(dict).sort((a, b) => {
    if (direction === 'asc') {
      return a[1] - b[1]
    }
    return b[1] - a[1]
  }))
}



//source 
// https://stackoverflow.com/questions/25500316/sort-a-dictionary-by-value-in-javascript
// https://stackoverflow.com/a/74380445/13861187
//////////////////////////////////////////////////////////////////////////////////


function sortObj(obj) {
    // Sort object as list based on values
    return Object.keys(obj).map(k => ([k, obj[k]])).sort((a, b) => (b[1] - a[1]))
}



//source 
//https://stackoverflow.com/questions/25500316/sort-a-dictionary-by-value-in-javascript
//https://stackoverflow.com/a/74250133/13861187
//////////////////////////////////////////////////////////////////////////////////

function withAMap(str) {
    // A map for the character=>count mappings
    const counts = new Map();

    // Loop through the string...
    for (const ch of str) {
        // Get the count for it, if we have one; we'll get `undefined` if we don't
        // know this character yet. Using nullish coalescing (`??`), we can turn
        // that `undefined` into a `0`. (In obsolete environments that don't
        // support nullish coalescing, for this use case we could use the logical
        // OR operator [`||`] instead to use `0` instead of any falsy value, since
        // A) `undefined` is falsy, and B) None of the count values we're tracking
        // will be falsy because they're all non-zero. For some other use cases,
        // we'd need to use a conditional testing `undefined` explicitly.)
        const count = counts.get(ch) ?? 0;

        // Add one and store the result
        counts.set(ch, count + 1);
    }

    // Show the counts
    for (const [ch, count] of counts) {
        console.log(`"${ch}" count: ${counts.get(ch)}`);
    }
}

function withAnObject(str) {
    // An object for the character=>count mappings
    // We use `Object.create(null)` so the object doesn't have any inherited properties
    const counts = Object.create(null);

    // Loop through the string...
    for (const ch of str) {
        // Get the count for it, if we have one; we'll get `undefined` if we don't
        // know this character yet. Using nullish coalescing (`??`), we can turn
        // that `undefined` into a `0`. (In obsolete environments that don't
        // support nullish coalescing, for this use case we could use the logical
        // OR operator [`||`] instead to use `0` instead of any falsy value, since
        // A) `undefined` is falsy, and B) None of the count values we're tracking
        // will be falsy because they're all non-zero. For some other use cases,
        // we'd need to use a conditional testing `undefined` explicitly.)
        const count = counts[ch] ?? 0;

        // Add one and store the result
        counts[ch] = count + 1;
    }

    // Show the counts
    for (const ch in counts) {
        console.log(`"${ch}" count: ${counts[ch]}`);
    }
}

const str = "abc321";
console.log("With a Map:");
withAMap(str);
console.log("With an object:");
withAnObject(str);




//source
//https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string
//https://stackoverflow.com/a/19480979/13861187
//////////////////////////////////////////////////////////////////////////////////


let s = 'hello';
var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
console.log(result); // {h: 1, e: 1, l: 2, o: 1}





//source
// https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string
// https://stackoverflow.com/a/55540351/13861187
//////////////////////////////////////////////////////////////////////////////////


class DictUtils {
    static entries(dictionary) {

        try {

            //ECMAScript 2017 and higher, better performance if support
            return Object.entries(dictionary);

        } catch (error) {

            //ECMAScript 5 and higher, full compatible but lower performance
            return Object.keys(dictionary).map(function(key) {
                return [key, dictionary[key]];
            });
        }

    }
    
    static sort(dictionary, sort_function) {
        return DictUtils.entries(dictionary)
            .sort(sort_function)
            .reduce((sorted, kv)=>{
                sorted[kv[0]] = kv[1]; 
                return sorted;
            }, {});
    }

} 

class SortFunctions {
    static compare(o0, o1) {
        //TODO compelte for not-number values
        return o0 - o1;
    }
    static byValueDescending(kv0, kv1) {
        return SortFunctions.compare(kv1[1], kv0[1]);
    }
    static byValueAscending(kv0, kv1) {
        return SortFunctions.compare(kv0[1], kv1[1]);
    }

}

let dict = {
    "jack": 10,
    "joe": 20,
    "nick": 8,
    "sare": 12
}

let sorted = DictUtils.sort(dict, SortFunctions.byValueDescending)

console.log(sorted);

//source
// https://stackoverflow.com/questions/25500316/sort-a-dictionary-by-value-in-javascript
// https://stackoverflow.com/a/69642627/13861187
//////////////////////////////////////////////////////////////////////////////////


function sort_object(obj) {
    items = Object.keys(obj).map(function(key) {
        return [key, obj[key]];
    });
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    sorted_obj={}
    $.each(items, function(k, v) {
        use_key = v[0]
        use_value = v[1]
        sorted_obj[use_key] = use_value
    })
    return(sorted_obj)
}


dict = {
  "x" : 1,
  "y" : 6,
  "z" : 9,
  "a" : 5,
  "b" : 7,
  "c" : 11,
  "d" : 17,
  "t" : 3
};

res = sort_object(dict)

console.log(res) 

//source
//https://stackoverflow.com/questions/25500316/sort-a-dictionary-by-value-in-javascript
//https://stackoverflow.com/a/53530097/13861187
//////////////////////////////////////////////////////////////////////////////////

//var dict = {
//  "x": 1,
//  "y": 6,
//  "z": 9,
//  "a": 5,
//  "b": 7,
//  "c": 11,
//  "d": 17,
//  "t": 3
//};



function SortToArray(dict){
  // Create items array
var items = Object.keys(dict).map(function(key) {
  return [key, dict[key]];
});
  // Sort the array based on the second element
items.sort(function(first, second) {
  return second[1] - first[1];
});

  return items
}


// Create a new array with only the first 5 items
//console.log(items.slice(0, 5));


// source
// https://stackoverflow.com/questions/25500316/sort-a-dictionary-by-value-in-javascript
// https://stackoverflow.com/a/25500462/13861187 

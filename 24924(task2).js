// Question:1
// Write a program where you need to extract the middle part of the string and converted it to upperacse
var s="i am pawankalyan";
var r=s.slice(5,12).toUpperCase();
console.log(r);

// Question:2
// Write a program that converts a string to uppercase and then calculates the length of the resulting string.
var s1="chintu";
var r1=s1.toUpperCase().length;
console.log(r1);

// Question:3
// Write a program that retrieves the character at a specific position in a string, and then finds the ASCII value (character code) of that character.
var s2="chintu";
var r2=s2.charCodeAt(3);
console.log(r2);

// Question:4
// Write a program that removes extra spaces from the start and end of a string, and then slices a portion of the string starting from the second character to the fourth character.
var s3="      virat kohli      ";
var r3=s3.trim().slice(1,4);
console.log(r3);

// Question:5
// Write a program that concatenates two strings where the first string is in its original case and the second string is converted to lowercase before concatenation.
var s4="PAWAN";
var s5="KALYAN";
var r4=s4.concat(" ",(s5.toLowerCase()));
console.log(r4);

// Question:6
// Write a program that removes leading spaces from a string, and then slices the string starting from the second character to the end.
var s6="        Rohith Sharma";
var r5=s6.trimStart().slice(1)
console.log(r5);

// Question:7
// Write a program that retrieves a specific character from a string and converts it to uppercase.
s7="Murthy";
var r6=s7.charAt(3).toUpperCase();
console.log(r6);

// Question:8
// Write a program that removes trailing spaces from a string and then concatenates it with another string.
var s8="Powerstar      ";
var r7=s8.trimEnd().concat(" ","PawanKalyan");
console.log(r7);

// Question:9
// Write a program that:
// Trims extra spaces from the start and end of a string.
// Converts the trimmed string to uppercase.
// Extracts a substring from the second character to the fifth character from the uppercase string.
// Example Input:
// let input = "   HelloWorld   ";
var i="    HelloWorld    ";
var r8=i.trim().toUpperCase().slice(1,6)
console.log(r8);

// Question: 10
// Write a program that:
// Converts two strings to lowercase.
// Concatenates the two lowercase strings with a space in between.
// Retrieves the first character of the concatenated result.
// Example Input:
// javascript
// Copy code
// let string1 = "HELLO";
// let string2 = "WORLD";







const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"


}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]} language`);  
}

// trying FOR IN loop for arrays

const arr = ["js", "rb" ,"py","java", "cpp"]

for (const language in arr) {
    console.log(arr[language]);
    
}
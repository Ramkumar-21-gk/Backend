console.log("Hello this is my first code toward for backend journey and devops journey.....");

const fs= require('fs');
fs.writeFile('output.txt',"this is my first file and congrats", (err)=>{
  if (err){
    console.log("Error Occured");
  }else{
    console.log('File Written Succesfully');
  }
})
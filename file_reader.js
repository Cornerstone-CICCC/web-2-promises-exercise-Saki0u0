const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
fs.readFile('./firstname.txt','utf-8')
  .then((data1) => {
    dataOne = data1
    return fs.readFile('./lastname.txt','utf-8')
  })
  .then((data2) => {
    dataTwo = data2
    return fs.readFile('./age.txt','utf-8')
  })
  .then((data3) => {
    dataThree = data3
    return fs.readFile('./hobbies.txt','utf-8')
  })
  .then((data4) => {
    datafour = data4
    const hobbyArray = JSON.parse(data4);
    const firstHobby = hobbyArray[0];
    const secondHobby = hobbyArray[1];

    console.log(`${dataOne} ${dataTwo} is ${dataThree} years old and his hobbies are ${firstHobby} and ${secondHobby}`);
  })
  .catch((error) => {
    console.log(error)
  })


// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function readDataFiles() {
  try {
    const data1 = await fs.readFile('./firstname.txt','utf-8')
    const data2 = await fs.readFile('./lastname.txt','utf-8')
    const data3 = await fs.readFile('./age.txt','utf-8')
    const data4 = await fs.readFile('./hobbies.txt','utf-8')
    const hobbyArray = JSON.parse(data4);
    const firstHobby = hobbyArray[0];
    const secondHobby = hobbyArray[1];

    const sentence = `${data1} ${data2} is ${data3} years old and his hobbies are ${firstHobby} and ${secondHobby}`;
        return sentence ;
  } catch (error) {
    console.error(error)
  }
}

async function outputData() {
  const data = await readDataFiles()
  console.log(data)
}

outputData()
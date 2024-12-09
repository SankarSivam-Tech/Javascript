//JSON - Javascript object notation
// text format
// to send and receive data in many programming languages

const myObj = {
  name: "veera sankar",
  job: ['frontend', 'backend', 'testing'],
  sub: function () {
    console.log("i learn JSON lesson");
  },
};

console.log(myObj);

const sendJson=JSON.stringify(myObj);
console.log(sendJson);

const receiveJson=JSON.parse(sendJson);
console.log(receiveJson);




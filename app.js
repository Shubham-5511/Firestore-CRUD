const Firestore = require("@google-cloud/firestore");

const userData = new Firestore({
  projectId: "udhyam-tech",
  keyFilename: __dirname+"/udhyam-tech-97117eb8883d.json"
});
// create data
const docRef = db.collection('users').doc('alovelace');
docRef.set({
  first:'Ada',
  last: 'Lovelace',
  born: 1815
});

const aTuringRef = db.collection('users').doc('aturing');

aTuringRef.set({
  'first':'Alan',
  'middle':'Mathison',
  'last':'turing',
  'born':1912
});

//Read data

var uEnterId = "user_2";
var collection =userData.collection('Info_Of_Users');

var query = collection.get()
.then( snapshort => {
  snapshort.forEach( doc => {
  console.log(doc.id, '=>' , doc.data());
  });

}).catch(err => {
  console.log("There was an error");
})



// delete data
userData.collection('Info_Of_Users').doc('user_2').delete()
.then( docu => {
  console.log('Document Deleted')
}).catch(err => {
  console.log("ther was an error in deleting a file");
})

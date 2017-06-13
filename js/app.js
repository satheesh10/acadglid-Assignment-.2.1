var name;
var age;
var dateOfBirth;
var placeOfBirth;

var personalInfo=function() {
  name='SatheeshKumar.K';
  age=24;
  dateOfBirth='22-01-1993';
  placeOfBirth='Coimbatore';
  console.log('Name :'+name);
  console.log('Age :'+age);
  console.log('Date Of Birth :'+dateOfBirth);
  console.log('Place Of Birth :'+placeOfBirth);
}
personalInfo();

var data={};
var data={
  name:'SatheeshKumar.K',
  age:24,
  dob:'22-01-1993',
  placeofbirth:'Coimbatore'
};
// personalInfo will print data in console
var personalInfoNotation=function functionName() {
  console.log('Name :'+data.name);
  console.log('Age :'+data.age);
  console.log('Date Of Birth :'+data.dob);
  console.log('Place Of Birth :'+data.placeofbirth);
}
personalInfoNotation();

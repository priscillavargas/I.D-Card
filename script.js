function idCard() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var address = document.getElementById('address').value;
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Age: " + age);
    console.log("Phone Number: " + phoneNumber);
    console.log("Address:" + address);
    
    document.getElementById("postFullName").innerHTML = firstName + " " +  lastName;
    document.getElementById("postAddress").innerHTML = address;
    numberArray(age,phoneNumber);
    document.getElementById("postAge").innerHTML = "Age:" + age;
    document.getElementById("postPhoneNumber").innerHTML = "Phone Number:" + phoneNumber;
}

function numberArray(age, phoneNumber){
  var ageNo = parseInt(age);
  var phoneNo = parseInt(phoneNumber);
  var numberArray = [ageNo, phoneNo];

  //for(starting point aka create your index; stopping point aka a condition that has to be true; what happens to the index after every iteration){
    for(var i=0;i < numberArray.length; i++){
    console.log(numberArray[i]);
  
    if(numberArray[i]<=100){
      //innerHTML to display phoneNo
    }
    else{
      (numberArray[i]>=100)
      //innerHTML to display age
    }
  }
}


//example problem
//var array = [1,2,3,5];

//for(var i=0;i < array.length; i++){
//  console.log(array[i]);
//}

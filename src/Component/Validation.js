import React from "react";

export default function validation(name,age,gmail,mobileNumber) {
   let error = {}

   if(name.length>=3){
    error.name = null
   }
   else {
    error.name = "* invalid Username *"
    error.errorCount = true

   }
   if(age.length>0){
    error.age = null
   }
   else {
    error.age = "* invalid Age *"
    error.errorCount = true
   }
   if(mobileNumber.length===10){
    error.mobileNumber = null
   }
   else if (mobileNumber.length===0){
    error.mobileNumber = "* Not mentioned "
    error.errorCount = true
   }
   else {
    error.mobileNumber = "* invalid mobile Number"
    error.errorCount = true
   }

   let lowerCaseMail = gmail.toLowerCase();
   let domain = ["gmail.com", "yahoo.com",];
   let check1, domainLength;
   for (let j = 0; j < domain.length; j++) {
       if (lowerCaseMail.indexOf(domain[j]) > 0) {
           check1 = lowerCaseMail.indexOf(domain[j])
           domainLength = domain[j].length
       }
   }
   let atCheck = lowerCaseMail.indexOf("@");
   let dotCheck = lowerCaseMail.indexOf(".");
   let specialChar = "`~!$%#^&*()_-+=}]{[|:?/><,;";
   let specialCharCheck = true;
   for (let k = 0; k < atCheck; k++) {
       for (let l = 0; l < specialChar.length; l++) {
           if (lowerCaseMail[k] === specialChar[l]) {
               specialCharCheck = false
           }
       }
   }
   if (atCheck !== -1 && check1 - atCheck === 1 && atCheck <
       dotCheck && lowerCaseMail.length == atCheck + domainLength + 1 && dotCheck > 3 && specialCharCheck) {
       error.gmail = ""
   }
   else {
       error.gmail = "* invalid email *"
       error.errorCount = true
   }

   return error
}
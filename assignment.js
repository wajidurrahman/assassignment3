//  https://github.com/wajidurrahman/assassignment3



/*KilometerToMeter*/
function KilometerToMeter(kilometer) {
   if (kilometer < 0) {
   }
   else {
      var meter = kilometer * 1000;
   }
   return meter;
}
console.log(KilometerToMeter(51));



/*budgetCalculator*/
function budgetCalculator(gori, phone, laptop) {
   if (gori < 0 || phone < 0 || laptop < 0) {
   }
   else {
      productsBudget = (50 * gori) + (100 * phone) + (500 * laptop);
   }
   return productsBudget;
}
console.log(budgetCalculator(35, 55, 99));



/*hotelCost*/
function hotelCost(day) {
   var fastTenDays;
   var extraDays;
   if (day <= 0) {
      return;
   }
   else if (day <= 10) {
      fastTenDays = day * 100;
      return fastTenDays;
   }
   else if (day <= 20) {
      extraDays = day - 10;
      fastTenDays = (10 * 100) + (extraDays * 80);
      return fastTenDays;
   }
   else {
      extraDays = day - 20;
      fastTenDays = (10 * 100) + (10 * 80) + (extraDays * 50);
      return fastTenDays;
   }
}
console.log(hotelCost(19));



/*megaFriend*/
someFriendNamed = ["Azizul", "Tarek", "Tanvir", "Asraful", "Najmul"];
function megeFirend(someFriendNamed) {
   var friendsListLength = someFriendNamed[0];
   if (someFriendNamed.length === 0 || Array.isArray(someFriendNamed) === false) {
      return;
   }
   else {
      for (var i = 0; i < someFriendNamed.length; i++) {
         if (someFriendNamed[i].length > friendsListLength.length) {
            friendsListLength = someFriendNamed[i];
         }
      }
      return friendsListLength;
   }
}
console.log(megeFirend(someFriendNamed));
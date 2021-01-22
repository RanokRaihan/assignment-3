// https://github.com/RanokRaihan/assignment-3


//problem 1: kilometer to meter

function kilometerToMeter(km){
    //check the input is number or not
    if(typeof(km) != "number"){
        return "invalid input! You have inserted a "+typeof(km)+". Please input a valid number";
    }
    //check negative number
    if (Math.sign(km) == -1){
        return "kilometer can not be negative. Please inserte a positive number"
    }
    var result = km*1000;
    return result;
}



// problem 2: budget calculator

function budgetCalculator(watch, phone, laptop) {
    //check the inputs are number or not
    if (
        typeof watch != "number" ||
        typeof phone != "number" ||
        typeof laptop != "number"
    ) {
        return "please input valid number";
    }
    //check the input numbers are integer and positive
    if (Math.floor(watch) != watch || Math.sign(watch) == -1) {
        return "You can not buy fraction or negative numbers of watch. please input an integer and positive number";
    }
    if (Math.floor(phone) != phone || Math.sign(phone) == -1) {
        return "You can not buy fraction or negative numbers of phone. please input an integer and positive number";
    }
    if (Math.floor(laptop) != laptop || Math.sign(laptop) == -1) {
        return "You can not buy fraction or negative numbers of laptop. please input an integer and positive number";
    }
    //defining single product price
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    //single product budget
    var watchBudget = watchPrice * watch;
    var phoneBudget = phonePrice * phone;
    var laptopBudget = laptopPrice * laptop;
    //total budget
    var totalBudget = watchBudget + phoneBudget + laptopBudget;

    return totalBudget;
}



//problem 3: hotel Cost

function hotelCost(days) {
    if(typeof(days) != "number"){
        return "please insert a valid number";
    }
    if(Math.sign(days) == -1){
        return "Days can not be negative. please insert a positive number";
    }

    var totalHotelCost = 0;
    var firstTenDays = 100;
    var secondTenDays = 80;
    var afterTwentyDays = 50;

    if (days <= 10) {
        totalHotelCost = days * firstTenDays;
    } 
    else if (days <= 20) {
        totalHotelCost = 10 * firstTenDays + (days - 10) * secondTenDays;
    } 
    else {
        totalHotelCost = 10 * firstTenDays + 10 * secondTenDays + (days - 20) * afterTwentyDays;
    }
    return totalHotelCost;
}



//problem 4: Mega Friend

function megaFriend(arr) {
    //check the input is array or not
    if (Array.isArray(arr)) {
        //check if the array is empty
        if(arr.length == 0){
            return "you have inserted an empty array! ";
        }
        var result = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i].length > result.length) {
                result = arr[i];
            }
        }
        return result;
    }
    else{
        return "You have passed a "+typeof(arr)+ " in this function. Please input a valid array"
    }
}


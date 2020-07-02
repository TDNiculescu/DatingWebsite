var fname;
var lname;
var email;
var firstNameCookie;
var lastNameCookie;
var eMailCookie;
var userGender;
var genderInterest;
var userGenderCookie;
var genderInterestCookie;
var sports;
var itc;
var music;
var hangingOutWithFriends;
var cars;
var learningNewThings;
var shortUserDescription;
var sportsCookie;
var itcCookie;
var musicCookie;
var hangingOutWithFriendsCookie;
var carsCookie;
var learningNewThingsCookie;
var shortUserDescriptionCookie;

const init = function () {
    //index next button
    var indexNB = document.getElementById('indexNextButton');
    if (indexNB != null) {
        indexNB.addEventListener('click', goToSecondPage);
    }

    //gender selection next button
    var genderNB = document.getElementById('genderSelectionNextButton');
    if (genderNB != null) {
        genderNB.addEventListener('click', goToThirdPage);
    }

    //gender selection back button
    var genderBB = document.getElementById('genderSelectionBackButton');
    if (genderBB != null) {
        genderBB.addEventListener("click", goFromSecondToFirst);
    }

    //hobbies next button
    var hobbiesNB = document.getElementById('hobbiesNextButton');
    if (hobbiesNB != null) {
        hobbiesNB.addEventListener('click', goToValidationPage);
    }

    //hobbies back button
    var hobbiesBB = document.getElementById('hobbiesBackButton');
    if (hobbiesBB != null) {
        hobbiesBB.addEventListener("click", goFromThirdToSecond);
    }

    //validation page back button
    var validationBB = document.getElementById('dataValidationBackButton');
    if (validationBB != null) {
        validationBB.addEventListener("click", goFromFourthToThird);
    }
}

//index next button to gender page
function goToSecondPage(event) {
    event.preventDefault();

    var firstNameIsValid = false;
    var lastNameIsValid = false;
    var eMailIsValid = false;

    firstNameCookie = "firstNameCookie";
    lastNameCookie = "lastNameCookie";
    eMailCookie = "eMailCookie";

    fname = document.getElementById('fname');
    lname = document.getElementById('lname');
    email = document.getElementById('email');

    //first name validation
    var fnameRegex = new RegExp("[a-zA-Z]");
    if (fname.value.length > 0 && fnameRegex.test(fname.value)) {
        addCookie(firstNameCookie, fname.value);
        firstNameIsValid = true;
    } else {
        alert("Your first name is invalid, please enter again.");
        return false;
    }

    //last name validation
    var lnameRegex = new RegExp("[a-zA-Z]");
    if (lname.value.length > 0 && lnameRegex.test(lname.value)) {
        addCookie(lastNameCookie, lname.value);
        lastNameIsValid = true;
    } else {
        alert("Your last name is invalid, please enter again.");
        return false;
    }

    //e-mail validation
    var emailRegex = new RegExp("^[a-z0-9\\_\\.\\-]{2,20}\\@[a-z0-9\\_\\-]{2,20}\\.[a-z]{2,9}$");
    if (email.value.length > 0 && emailRegex.test(email.value)) {
        addCookie(eMailCookie, email.value);
        eMailIsValid = true;
    } else {
        alert("The e-mail is invalid, please enter again.");
        return false;
    }

    if (firstNameIsValid && lastNameIsValid && eMailIsValid) {
        window.location.href = 'genderSelectionAndOrientation.html';
    }
    return;
}

//gender back to index page button
function goFromSecondToFirst() {
    window.location.href = 'index.html';
}

//gender next button to hobbies page
function goToThirdPage(event) {
    event.preventDefault();

    var userGenderIsValid = false;
    var preferenceIsValid = false;
    userGenderCookie = "userGenderCookie";
    genderInterestCookie = "genderInterestCookie";

    userGender = document.getElementById('genders');
    genderInterest = document.getElementById('lookingFor');

    //user gender validation
    if (userGender.value === "male" || userGender.value === "female") {
        addCookie(userGenderCookie, userGender.value);
        userGenderIsValid = true;
    } else {
        alert("Please enter your gender.");
        return false;
    }

    //user preference validation
    if (genderInterest.value === "male" || genderInterest.value === "female") {
        addCookie(genderInterestCookie, genderInterest.value);
        preferenceIsValid = true;
    } else {
        alert("Please enter your gender preference.");
        return false;
    }

    if (userGenderIsValid && preferenceIsValid) {
        window.location.href = 'hobbiesAndDescription.html';
    }
    return;
}

//hobbies to gender page back button
function goFromThirdToSecond() {
    window.location.href = 'genderSelectionAndOrientation.html';
}

//hobbies to validation page next button
function goToValidationPage() {
    sportsCookie = "sportsCookie";
    itcCookie = "itcCookie";
    musicCookie = "musicCookie";
    hangingOutWithFriendsCookie = "hangingOutWithFriendsCookie";
    carsCookie = "carsCookie";
    learningNewThingsCookie = "learningNewThingsCookie";
    shortUserDescriptionCookie = "shortUserDescriptionCookie";

    sports = document.getElementById('Sports');
    itc = document.getElementById('ITC');
    music = document.getElementById('Music');
    hangingOutWithFriends = document.getElementById('HangingOutWithFriends');
    cars = document.getElementById('Cars');
    learningNewThings = document.getElementById('LearningNewThings');
    shortUserDescription = document.getElementById('textArea');

    if (sports.checked) {
        addCookie(sportsCookie, "Sports");
    } else {
        addCookie(sportsCookie, "");
    }

    if (itc.checked) {
        addCookie(itcCookie, "ITC");
    } else {
        addCookie(itcCookie, "");
    }

    if (music.checked) {
        addCookie(musicCookie, "Music");
    } else {
        addCookie(musicCookie, "");
    }

    if (hangingOutWithFriends.checked) {
        addCookie(hangingOutWithFriendsCookie, "Hanging out with friends");
    } else {
        addCookie(hangingOutWithFriendsCookie, "");
    }

    if (cars.checked) {
        addCookie(carsCookie, "Cars");
    } else {
        addCookie(carsCookie, "");
    }

    if (learningNewThings.checked) {
        addCookie(learningNewThingsCookie, "Learning new things");
    } else {
        addCookie(learningNewThingsCookie, "");
    }

    if (shortUserDescription.value != null) {
        addCookie(shortUserDescriptionCookie, shortUserDescription.value);
    } else if (shortUserDescription.value === "") {
        addCookie(shortUserDescriptionCookie, "");
    }

    window.location.href = 'dataValidation.html';
}

//validation back button to hobbies
function goFromFourthToThird() {
    window.location.href = 'hobbiesAndDescription.html';
}

//user information display for validation
window.onload = function displayUserDataForValidation() {
    var finalUserInformation = document.getElementById("userDataForValidation");

    function nameFormattingFunction() {
        var firstNameDisplay = getCookie("firstNameCookie");
        var lastNameDisplay = getCookie("lastNameCookie");

        var nameFinalDisplay = "Your full name is: " + firstNameDisplay + " " + lastNameDisplay + ".";

        return nameFinalDisplay;
    }

    function genderFormattingFunction() {
        var userGenderDisplay = getCookie("userGenderCookie");
        var genderInterest = getCookie("genderInterestCookie");

        var genderAndInterestFinalDisplay = "You are a " + userGenderDisplay + " and you are interested in a " + genderInterest + ".";

        return genderAndInterestFinalDisplay;
    }

    function hobbiesFormattingFunction() {
        var sportsDisplay = getCookie("sportsCookie");
        var itcDisplay = getCookie("itcCookie");
        var musicDisplay = getCookie("musicCookie");
        var friendsDisplay = getCookie("hangingOutWithFriendsCookie");
        var carsDisplay = getCookie("carsCookie");
        var learningDisplay = getCookie("learningNewThingsCookie");

        var hobbiesFinalDisplay = "Your hobbies include: ";

        if (sportsDisplay === "" && itcDisplay === "" && musicDisplay === "" && friendsDisplay === "" && carsDisplay === "" && learningDisplay === "") {
            hobbiesFinalDisplay = "You do not have any hobbies! How do you expect someone to like you?";
        } else {
            if (sportsDisplay !== "") {
                hobbiesFinalDisplay += sportsDisplay;
                if (itcDisplay === "" && musicDisplay === "" && friendsDisplay === "" && carsDisplay === "" && learningDisplay === "") {
                    hobbiesFinalDisplay += ".";
                } else {
                    hobbiesFinalDisplay += ", ";
                }
            }

            if (itcDisplay !== "") {
                hobbiesFinalDisplay += itcDisplay;
                if (musicDisplay === "" && friendsDisplay === "" && carsDisplay === "" && learningDisplay === "") {
                    hobbiesFinalDisplay += ".";
                } else {
                    hobbiesFinalDisplay += ", ";
                }
            }

            if (musicDisplay !== "") {
                hobbiesFinalDisplay += musicDisplay;
                if (friendsDisplay === "" && carsDisplay === "" && learningDisplay === "") {
                    hobbiesFinalDisplay += ".";
                } else {
                    hobbiesFinalDisplay += ", ";
                }
            }

            if (friendsDisplay !== "") {
                hobbiesFinalDisplay += friendsDisplay;
                if (carsDisplay === "" && learningDisplay === "") {
                    hobbiesFinalDisplay += ".";
                } else {
                    hobbiesFinalDisplay += ", ";
                }
            }

            if (carsDisplay !== "") {
                hobbiesFinalDisplay += carsDisplay;
                if (learningDisplay === "") {
                    hobbiesFinalDisplay += ".";
                } else {
                    hobbiesFinalDisplay += ", ";
                }
            }

            if (learningDisplay !== "") {
                hobbiesFinalDisplay += learningDisplay + ".";
            }
        }
        return hobbiesFinalDisplay;
    }

    function userDescriptionFormattingFunction() {
        var userDescriptionDisplay = getCookie("shortUserDescriptionCookie");

        if (userDescriptionDisplay === "") {
            userDescriptionFinalDisplay = "You should write a short description about yourself, it would increase your chances!"
        } else {
            userDescriptionFinalDisplay = "Your short description: " + userDescriptionDisplay;
        }
        return userDescriptionFinalDisplay;
    }

    function eMailFormattingFunction() {
        var eMailDisplay = getCookie("eMailCookie");

        var eMailFinalDisplay = "Your e-mail is: " + eMailDisplay + ".";

        return eMailFinalDisplay;
    }

    //final user info formatting
    if (finalUserInformation != null) {
        var eMailFinalDisplay = eMailFormattingFunction();
        var nameFinalDisplay = nameFormattingFunction();
        var genderAndInterestFinalDisplay = genderFormattingFunction();
        var hobbiesFinalDisplay = hobbiesFormattingFunction();
        var userDescriptionFinalDisplay = userDescriptionFormattingFunction();

        finalUserInformation.innerHTML = nameFinalDisplay + "<br><br>" + eMailFinalDisplay + "<br><br>"
            + genderAndInterestFinalDisplay + "<br><br>" + hobbiesFinalDisplay + "<br><br>" + userDescriptionFinalDisplay;
    }
}

function addCookie(cookieName, cookieValue) {
    document.cookie = cookieName + "=" + cookieValue;
}

function getCookie(cookieName) {
    var allCookiesArray = document.cookie.split('; ');

    for (var i = 0; i < allCookiesArray.length; i++) {
        var temp = allCookiesArray[i];
        if (temp.indexOf(cookieName) == 0) {
            return temp.substring(temp.indexOf("=") + 1, temp.length);
        }
    }
    return "";
}

document.addEventListener('DOMContentLoaded', init);

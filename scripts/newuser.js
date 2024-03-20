function newuser(form) {
	registercode = new Array("3141592653589", "thispasswordisreallysafe");/* 1st code for admin, 2nd one for members code*/

	if(form.code.value == registercode[0]) {
		alert("USER Admin1 - 3141592653589")/* When you enter admin code */
	}
	else if(form.code.value == registercode[1]) {
		alert("Username - 'memberaccount', password - 'thispasswordisnotverysafeinit'")/* Member username and password*/
	}
	else {
		alert("Incorrect code. Please re-try or contact DOGONOVA for assistance.")/* No such user */
	}
}
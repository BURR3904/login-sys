function check(form) {
    username = new Array("admin1", "SUPERUSER", "memberaccount");
    password = new Array("Dogcatmoewwoof1985", "Dogcatmoewwoof1985", "thispasswordisnotverysafe");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('FAtAhFcNAu5S4xhuxJF9dfUCKDwZrFK2.html')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('DqePZ4kvFsGUkR5C9zU62FyMsyhNrS83.html')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}
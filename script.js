let date = new Date();

// this variable defines the users premium status
premium = 1;

// inject call buttom
const btn = document.getElementById("anrufknopf");
btn.style.color = "white";
btn.style.width = "720px";
btn.style.height = "50px";
btn.style.border = "transparent";
btn.style.background = "green";
btn.value = "Start";
btn.onclick = () => {
	if (btn.value == "Stop") {
		currentCall.hangup();
		session.disconnect();
		document.getElementById("countdown_cont").style.visibility = "hidden";
		btn.value = "Start";
		return;
	}
	phone = document.getElementById("callee").value.replace(/\D+/g, "");
	if (phone.charAt(0) == "0" && phone.charAt(1) != "0") {
		let condition = document.getElementById("destarea").selectedIndex;
		date.setTime(date.getTime() + 3600000);
		document.cookie =
			"MarcophonoLOC=" +
			{
				2: "CH",
				1: "AT",
				0: "DE",
			}[condition] +
			"; expires=" +
			date.toUTCString();
		document.getElementById("callee2").value =
			{
				2: "0041",
				1: "0043",
				0: "0049",
			}[condition] + phone.substring(1);
		btn.value = "Stop";
		checknummer();
		setTimeout(() => setStatus("#regStatus", "https://osumatrix.me"), 4096);
	}
};

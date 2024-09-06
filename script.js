let footer = document.querySelector("#footer");
if (!footer) {
	footer = document.createElement("footer");
	footer.id = "footer";
	footer.innerHTML = `\
	<hr/>
	<h3><a href="./" target="main">gohjy Book Bugs (Main Page)</a></h3>
	<p>
		<a href="https://www.nlb.gov.sg/main/site/discovereads/bookbugs-tales-of-travellers/Book-Bugs-Tales-of-Travellers" target="official">Official Book Bugs Webpage</a>
	</p>
	<p>
		<a href="fortrade.html" target="fortrade">Cards for trade</a>
	</p>
	<p>
		<a href="need.html" target="needed">Cards needed</a>
	</p>`;
	document.body.appendChild(footer);
}

let datetime = document.createElement("p");
let date = new Date("6 Sep 2024"); // Last updated
datetime.innerHTML = `<em>Updated ${date.toDateString()}</em>`;
footer.appendChild(datetime);
window.onload = function() {
    var interval = setInterval(handleRefresh, 3000);
    handleRefresh();
}
function handleRefresh() {
	console.log("here");
	var url = "http://openapi.seoul.go.kr:8088/4c5a754b5276767638326461696d52/xml/GwanakClassLectureList/1/30/"
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			updatelecture(this);
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}	

function updatelecture(xml) {
	var xmlDoc = xml.responseXML;
	var lecturesDiv = document.getElementById("lectures");
	lectures = xmlDoc.getElementsByTagName("lecture");

	for (var i = 0; i < lectures.length; i++) {
		var lecture = lectures[i];
		var div = document.createElement("div");
		div.setAttribute("class", "lecture");
		div.innerHTML = 
        	"강좌명 : " + lecture.getElementsByTagName("TITLE") + "은 "
        	+ "교육기간 : " + lecture.getElementsByTagName("EDU_PEROID")[0].childNodes[0].nodeValue + " "
        	+ "교육장소 : " + lecture.getElementsByTagName("EDU_PLACE")[0].childNodes[0].nodeValue + " "
        	+ "교육대상 : " + lecture.getElementsByTagName("EDU_TARGET")[0].childNodes[0].nodeValue + " "
        	+ "접수방법 : " + lecture.getElementsByTagName("APPLY_WAY")[0].childNodes[0].nodeValue + " "
        	+ "수강료 : " + lecture.getElementsByTagName("EDU_PAY")[0].childNodes[0].nodeValue + "원 입니다. ";
        subwayDiv.appendChild(div);
	}

}


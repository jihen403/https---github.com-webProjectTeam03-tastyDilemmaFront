// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
window.onload = function() {
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  
        
// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(); 

// 사용자의 현재 위치 얻기
function currentLocation() {
	// HTML5의 geolocation으로 사용할 수 있는지 확인합니다
	if (navigator.geolocation) {

		// GeoLocation을 이용해서 접속 위치를 얻어옵니다
		navigator.geolocation.getCurrentPosition(function(position) {

			var lat = position.coords.latitude, // 위도
			    lon = position.coords.longitude; // 경도

			var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
			var message = '<div style="padding:5px;">현위치</div>'; // 인포윈도우에 표시될 내용입니다

			// 마커와 인포윈도우를 표시합니다
			displayMarker(locPosition, message);
		});
	} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

		var locPosition = new kakao.maps.LatLng(37.4812845080678, 126.952713197762),
			message = '현재 위치를 알 수 없어 기본 위치로 이동합니다.'

		currentLatLon['lat'] = 33.450701
		currentLatLon['lon'] = 126.570667

		displayMarker(locPosition, message);
	}
	return true
}

currentLocation();

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // 지도 중심을 사용자의 현재 위치로 이동
        map.setCenter(new kakao.maps.LatLng(lat, lng));

    // 반경 500미터 이내의 일식집을 검색합니다
    const options = {
       location: new kakao.maps.LatLng(lat, lng),
       radius: 500
        };
        ps.categorySearch('FD6', placesSearchCB, {useMapBounds:true}); 
    }, () => {
        console.error('사용자 위치를 가져올 수 없습니다.');
    });
        } else {
    console.error('Geolocation API를 지원하지 않습니다.');
}


// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
   if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 무작위 식당을 선택
       var randomPlace = data[Math.floor(Math.random() * data.length)];
        displayMarker(randomPlace);    
    } 
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 지도 중심을 무작위로 선택된 장소로 이동
    map.setCenter(new kakao.maps.LatLng(place.y, place.x));
}
}
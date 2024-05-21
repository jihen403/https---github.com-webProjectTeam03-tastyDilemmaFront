document.addEventListener("DOMContentLoaded", function() {
    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    var mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표 (기본값)
        level: 3 // 지도의 확대 레벨
    };  

    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption); 

   // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(); 

// 사용자의 현재 위치 얻기
function currentLocation() {
    // HTML5의 geolocation을 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude; // 위도
            var lon = position.coords.longitude; // 경도

            var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            var message = '<div style="padding:5px;">현위치</div>'; // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);

            // 지도 중심을 사용자의 현재 위치로 이동
            map.setCenter(new kakao.maps.LatLng(lat, lon));

            // 반경 500미터 이내의 원을 지도에 표시합니다
            displayCircle(lat, lon, 500);

        }, function() {
            console.error('사용자 위치를 가져올 수 없습니다.');
        });
    } else {
        // HTML5의 GeoLocation을 사용할 수 없을 때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        var locPosition = new kakao.maps.LatLng(37.4812845080678, 126.952713197762);
        var message = '현재 위치를 알 수 없어 기본 위치로 이동합니다.';

        // 기본 위치로 설정
        currentLatLon['lat'] = 33.450701;
        currentLatLon['lon'] = 126.570667;

        displayMarker(locPosition, message);
        console.error('Geolocation API를 지원하지 않습니다.');
    }
    return true;
}

currentLocation();


     // 원을 지도에 표시하는 함수입니다
    function displayCircle(lat, lng, radius) {
        var circle = new kakao.maps.Circle({ 
            center: new kakao.maps.LatLng(lat, lng), // 원의 중심좌표입니다
            radius: radius, // 원의 반지름입니다
            strokeWeight: 1, // 선의 두께입니다
            strokeColor: '#00a0e9', // 선의 색깔입니다
            strokeOpacity: 0.1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid', // 선의 스타일입니다
            fillColor: '#00a0e9', // 채우기 색깔입니다
            fillOpacity: 0.2  // 채우기 불투명도입니다 
        });

        // 원을 지도에 표시합니다
        circle.setMap(map); 

        // 원의 반경 정보를 표시할 커스텀오버레이를 생성합니다
        var radiusOverlay = new kakao.maps.CustomOverlay({
            content: '<div class="info">반경 <span class="number">' + radius + '</span>m안에 메뉴 찾는중...!</div>', // 표시할 내용입니다
            position: new kakao.maps.LatLng(lat, lng), // 표시할 위치입니다
            xAnchor: 0,
                    yAnchor: 0,
            zIndex: 1 
        });

        // 반경 정보 커스텀 오버레이를 지도에 표시합니다
        radiusOverlay.setMap(map);
   }
});
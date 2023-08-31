const noticeAllContents = [
    {
        title: "Double Room",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_double.jpg",
        link: "/sub/room_detail.html",
        alignment: "left"
    },
    {
        title: "Twin Room",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_twin.jpg",
        link: "/sub/room_detail.html",
        alignment: "right"
    },
    {
        title: "Triple Room",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_triple.jpg",
        link: "/sub/room_detail.html",
        alignment: "left"
    },
    {
        title: "Family Room",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_family.jpg",
        link: "/sub/room_detail.html",
        alignment: "right"
    },
    {
        title: "Room for Group",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_forgroup.jpg",
        link: "/sub/room_detail.html",
        alignment: "left"
    },
    {
        title: "Kids Room",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_kids.jpg",
        link: "/sub/room_detail.html",
        alignment: "right"
    }
    // 추가적으로 다른 객실 정보도 이 배열에 추가할 수 있습니다.
];

function renderRooms(rooms) {
    const roomListId = document.getElementById('roomList');
   
    const html = rooms.map(room => `
    <div class="content_aboutus">
        <div class="aboutus_list inner">
            <div class="top">
                <h2>01</h2>
                <div class="top_left">
                    <div class="line"></div>
                    <h3>옥상 팔각정</h3>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom_img">
                    <img src="/images/sub/outdoor_octagon.jfif" alt="옥상 팔각정">
                    <p class="english_left">THE OCTAGON PAVILION ON THE ROOFTOP</p>
                </div><!-- bottom_img -->
                <div class="bottom_txt">
                    <p><span>옥상 팔각정은 팔각루프탑으로 운영 예정입니다.</span></p>
                    <p>체계적인 호텔 시스템과 편리한 시설, 그리고 호텔의 세심한 서비스가 더해져 최고의 만족을 안겨드립니다.</p>
                </div>
            </div>
        </div>         
        <div class="graybox"></div>
    </div>
    `).join('');

    roomListId.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
    renderRooms(roomTypeAllContents);
});
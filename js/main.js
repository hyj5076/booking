// ====================================
//  main Title
// ====================================

const mainTitleContents = {
    '개인': "글램핑, 바베큐장, 계곡 등 자연친화적인 공간에서 사랑하는 사람들과 행복한 시간을 보내세요. <a href='sub/notice_aboutus.html'>소개 바로가기</a>",
    '단체': "단체용 텍스트 내용. <a href='sub/notice_aboutus.html'>소개 바로가기</a>",
    '글램핑': "글램핑용 텍스트 내용. <a href='sub/notice_aboutus.html'>소개 바로가기</a>"
};

function changeText(event) {
    event.preventDefault(); 
    const type = event.target.getAttribute('data-type');
    const p = document.getElementById('textContent');

    p.innerHTML = mainTitleContents[type] || "글램핑, 바베큐장, 계곡 등 자연친화적인 공간에서 사랑하는 사람들과 행복한 시간을 보내세요. <a href='sub/notice_aboutus.html'>소개 바로가기</a>";

    switch (type) {
        case '개인':
            renderContents(contents01);
            break;
        case '단체':
            renderContents(contents02);
            break;
        case '글램핑':
            renderContents(contents03);
            break;
        default:
            break;
    }
}

// 리스트 아이템의 모든 <a> 태그에 이벤트 리스너 추가
document.querySelectorAll('.main_part a').forEach(link => {
    link.addEventListener('click', changeText);
});

// ====================================
//  main Contents
// ====================================

const contents01 = [
    {
        title: "The Valley",
        description: "에잇포레에서 자연과 함께하는 최고의 하루를 보내세요.",
        image: "images/valley.jpg",
        alt: "계곡",
        link: "sub/notice_attraction.html",
        linkText: "00계곡 자세히보기"
    },
    {
        title: "Glamping",
        description: "에잇포레의 글램핑장에서 바베큐를 즐겨보세요.",
        image: "images/glamping.jpg",
        alt: "글램핑",
        link: "sub/outdoor_glamping.html",
        linkText: "글램핑 자세히보기"
    },
    {
        title: "The Way to Come",
        description: "경주 바닷길을 따라 오시면 000평 규모의 에잇포레 호텔이 있습니다.",
        image: "images/waytocome.jpg",
        alt: "오시는길",
        link: "sub/notice_way.html",
        linkText: "오시는길 자세히보기"
    }
];

const contents02 = [
    {
        title: "The Valley 변경되었어!!!! 단체",
        description: "에잇포레에서 자연과 함께하는 최고의 하루를 보내세요.",
        image: "images/valley.jpg",
        alt: "계곡",
        link: "sub/notice_attraction.html",
        linkText: "00계곡 자세히보기"
    },
    {
        title: "Glamping",
        description: "에잇포레의 글램핑장에서 바베큐를 즐겨보세요.",
        image: "images/glamping.jpg",
        alt: "글램핑",
        link: "sub/outdoor_glamping.html",
        linkText: "글램핑 자세히보기"
    },
    {
        title: "The Way to Come",
        description: "경주 바닷길을 따라 오시면 000평 규모의 에잇포레 호텔이 있습니다.",
        image: "images/waytocome.jpg",
        alt: "오시는길",
        link: "sub/notice_way.html",
        linkText: "오시는길 자세히보기"
    }
];

const contents03 = [
    {
        title: "The Valley 변경되었어!!!! 글램핑",
        description: "에잇포레에서 자연과 함께하는 최고의 하루를 보내세요.",
        image: "images/valley.jpg",
        alt: "계곡",
        link: "sub/notice_attraction.html",
        linkText: "00계곡 자세히보기"
    },
    {
        title: "Glamping",
        description: "에잇포레의 글램핑장에서 바베큐를 즐겨보세요.",
        image: "images/glamping.jpg",
        alt: "글램핑",
        link: "sub/outdoor_glamping.html",
        linkText: "글램핑 자세히보기"
    },
    {
        title: "The Way to Come",
        description: "경주 바닷길을 따라 오시면 000평 규모의 에잇포레 호텔이 있습니다.",
        image: "images/waytocome.jpg",
        alt: "오시는길",
        link: "sub/notice_way.html",
        linkText: "오시는길 자세히보기"
    }
];

function renderContents(contentSet) {
    const container = document.getElementById('contentContainer');

    const html = contentSet.map(content => `
        <div class="content">
            <div class="inner">
                <div class="content_title">
                    <div>
                        <h3>${content.title}</h3>
                        <p>${content.description}</p>
                    </div>
                </div>

                <div class="content_img">
                    <div>
                        <img src="${content.image}" alt="${content.alt}">
                    </div>
                    <div class="more">
                        <p><a href="${content.link}">${content.linkText}</a></p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
    renderContents(contents01);
});
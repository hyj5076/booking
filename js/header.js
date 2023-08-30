// ====================================
//  header
// ====================================

// li와 아이콘 생성 해주기
function createHeader() {
    const h1 = document.createElement('h1');
    const icon = document.createElement('i');
    icon.className = "bi bi-circle-fill"; 
    li.appendChild(icon);
    return li;
}

function initializePaginationItems() {
    const paginationContainer = document.querySelector("#pagination");
    
    colors.forEach(() => {
        const newLi = createListItemWithIcon();
        paginationContainer.appendChild(newLi);
    });
}

// 만약 #pagenation에서 li i를 하드코딩해주었다면 이 부분만 필요함
function updateDotColors() {
    const paginationItems = document.querySelectorAll("#pagination li");

    paginationItems.forEach((item, index) => {
        if (index === page) {
            item.querySelector('i').style.color = colors[index];
        } else {
            item.querySelector('i').style.color = "#ddd";
        }
    });
}

// 페이지 로드 시 pagination items 초기화
document.addEventListener("DOMContentLoaded", () => {
    initializePaginationItems();
    updateDotColors();
    bindPaginationClicks();
});
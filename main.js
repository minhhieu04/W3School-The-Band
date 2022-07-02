const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
//  Header
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
// tao 1 bien lay chieu cao
var headerHeight = header.clientHeight;

// Đống mở mobile-menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

//Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    // Điều kiện này có nghĩa là menuItem.nextElementSibling nếu có anh chị em liền kề
    // và this.nextElementSibling.classList.contains('subnav'): anh chị em liền kề đó có chứa class là subnav
    // Kết quả sẽ trả về biến isParentMenu chính là menu cha
    // Lấy class trong 1 element là dùng lệnh classList còn kiểm tra có tên class có trong classList thì dùng thêm contait
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            // preventDefaunt: bỏ qua sự kiện mặt định, bỏ qua trở về home do gán hreft: a
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}


function showBuyTickets() {
    modal.classList.add('open')
}
function hideBuyTickets() {
    modal.classList.remove('open')
} 

for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
} 

modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function (event){
    event.stopPropagation()
})

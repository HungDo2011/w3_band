var header = document.getElementById('header');
var mobileBtn = document.getElementById('mobile-btn');
var headerHeight = header.clientHeight;
mobileBtn.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
    // TỰ ĐỘNG ĐÓNG KHI BẤM VÀO PHẦN TỬ MENU
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for (var i = 0; i < menuItems.length; i++) {
       var menuItem = menuItems[i];

       menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
         if (isParentMenu) {
            event.preventDefault();
         }
         else {
          header.style.height = null;
        }
       } 
    }


    const buyBtns = document.querySelectorAll('.js-buy-ticket')
    const modal = document.querySelector('.js-modal')
    const modalClose = document.querySelector('.js-modal-close')
    const modalContainer = document.querySelector('.js-modal-container')
    
    function showBuytickets() {
        modal.classList.add('open') 
        }

    function hideBuytickets() {
        modal.classList.remove('open')
    }

    for (const buyBtn of buyBtns) {
        buyBtn.addEventListener('click', showBuytickets)
    }

    
    modalClose.addEventListener ('click', hideBuytickets)

    modal.addEventListener('click', hideBuytickets)

    modalContainer.addEventListener ('click', function (event){
        event.stopPropagation()
    })
    
    


// ==================== sidebar toggle for admiin ==================================
const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show-sidebar-btns');
const hideSidebarBtn = document.querySelector('#hide-sidebar-btns');

// ========show menu on click 
const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}
// ========hide menu on click 
const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}

showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);
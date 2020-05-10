const today = moment().format("dddd Do MMMM YYYY");
document.getElementById('displayDate').innerHTML = today;

var varLoad;

function load() {
    varLoad = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("dashboard-content").style.display = "block";
}

$('#body-row .collapse').collapse('hide');

$('[data-toggle=sidebar-collapse]').click(function () {
    SidebarCollapse();
});

function SidebarCollapse() {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.sidebar-text').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    $('#collapse-icon').toggleClass('fa-angle-left fa-angle-right');
};
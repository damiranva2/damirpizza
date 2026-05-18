function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => {
        content.style.display = "none";
        content.classList.remove("active");
    });

    
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(button => {
        button.classList.remove("active");
    });

    
    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = "block";
    selectedTab.classList.add("active");

    
    evt.currentTarget.classList.add("active");
}
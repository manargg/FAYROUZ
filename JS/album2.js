
document.addEventListener("DOMContentLoaded", () => {

    /*Display the side menu*/ 
    const toggleIcon = document.querySelector(".toggle-icon");
    const sideMenu = document.getElementById("side-menu");
    const closeIcon = document.querySelector(".close-icon");
    
    toggleIcon.addEventListener("click", () =>{
        sideMenu.classList.add("display")
    })
    closeIcon.addEventListener("click", () =>{
        sideMenu.classList.remove("display")
    })
    
    /*Display the side menus*/
    const menuItem1 = document.querySelectorAll(".menu-item-1");
    const subMenus = document.querySelectorAll(".sub-menu");
    const arrowImages = document.querySelectorAll(".menu-item-1 img");
    
    // Loop through each menu item and add the event listener
    menuItem1.forEach((menuItem, index) => {
        const subMenu = subMenus[index]; 
        const arrowImage = arrowImages[index]; // Get the corresponding arrow image
    
        menuItem.addEventListener("click", () => {
            subMenu.classList.toggle("show"); 
    
            if (subMenu.classList.contains("show")) {
                arrowImage.src = "./images/arrow-down-s-line.svg";
            } else {
                arrowImage.src = "./images/arrow-right-s-line.svg";
            }
        });
    });
    
    
        /*Add audio to the page*/
        const playIcons = document.querySelectorAll(".play-icon");
        const audioElements = document.querySelectorAll("audio");
    
        playIcons.forEach((playIcon, index) => {
            const audio = audioElements[index]; // Corresponding audio element
    
            playIcon.addEventListener("click", () => {
                // Pause all other audios
                audioElements.forEach((otherAudio, i) => {
                    if (otherAudio !== audio) {
                        otherAudio.pause();
                        playIcons[i].classList.replace("ri-pause-line", "ri-play-line");
                    }
                });
    
                // Play or pause the current audio
                if (audio.paused) {
                    audio.play();
                    playIcon.classList.replace("ri-play-line", "ri-pause-line");
                } else {
                    audio.pause();
                    playIcon.classList.replace("ri-pause-line", "ri-play-line");
                }
            });
    
            // Reset icon when audio ends
            audio.addEventListener("ended", () => {
                playIcon.classList.replace("ri-pause-line", "ri-play-line");
            });
        });
    
        /*Add a smoth scroll to btn-hero button */
        const btnHero = document.querySelector(".btn-hero");
        
        btnHero.addEventListener("click", (event) => {
            event.preventDefault(); 
    
            const target = document.querySelector("#audio"); 
            target.scrollIntoView({
                behavior: "smooth", 
                block: "start"
            });
        });
    
    
    });
    
    
    
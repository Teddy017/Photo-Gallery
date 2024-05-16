document.addEventListener("DOMContentLoaded", function() {
    const grid = document.querySelector(".grid");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const caption = document.querySelector(".caption");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    
        const photos = [
            "luffy.jpg", 
            "zoro.jpg",
            "sanji.jpg",
            "nami.jpg",
            "usopp.jpg",
            "chopper.jpg",
            "robin.jpg",
            "brook.jpg",
            "frankey.jpg",
            "jimbe.jpg",
            "dragon.jpg",
            "roger.jpg",
        ];
    
        photos.forEach(function(photo) {
        const img = document.createElement("img");
        img.src = photo;
        img.alt = "Photo";
        img.classList.add("thumbnail");
        grid.appendChild(img);
    
        img.addEventListener("click", function() {
            lightboxImg.src = photo;
            lightbox.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
        });
    
        closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
        });
    
        document.addEventListener("click", function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
        });
    
        let currentIndex = 0;
    
        function showPhoto(index) {
        if (index < 0) {
            currentIndex = photos.length - 1;
        } else if (index >= photos.length) {
            currentIndex = 0;
        }
        lightboxImg.src = photos[currentIndex];
        caption.textContent = "Photo " + (currentIndex + 1) + " of " + photos.length;
        }
    
        prevBtn.addEventListener("click", function() {
        showPhoto(--currentIndex);
        });
    
        nextBtn.addEventListener("click", function() {
        showPhoto(++currentIndex);
        });
    
        document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
            showPhoto(--currentIndex);
        } else if (e.key === "ArrowRight") {
            showPhoto(++currentIndex);
        }
        });
    });
    
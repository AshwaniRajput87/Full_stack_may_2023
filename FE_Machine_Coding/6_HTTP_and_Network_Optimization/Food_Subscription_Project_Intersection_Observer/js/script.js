import IntersectionObserverUtil from "../utils/IntersectionObserverUtil.js";

const handleImageIntersection = (img) => {
    img.src = img.dataset.src;

    img.onload = () => {
        img.removeAttribute('data-src')
    }
}

const lazyLoadImages = () => {
    
    const intersectionObserver = new IntersectionObserverUtil(handleImageIntersection, { threshold: 0.5 });

    const lazyImages = document.querySelectorAll('img[data-src]');

    console.log(lazyImages);

    lazyImages.forEach((image) => {
        intersectionObserver.observe(image);
    })

}

lazyLoadImages();
/***
 *  Star rating component:
 *    - Real usecases
 *       - e-commerece sites
 *       - food rating sites
 *       - education sites (scaler, etc)
 * 
 *    - Requirements
 *      - rating from 1 to 5
 *      - when click on the star(s) -> rating should appear
 *      - a hover effect should be there
 * 
 */
class StarRating{
    constructor(starContainerId) {
        this.container = document.querySelector(starContainerId);
        // console.log(this.container);

        this.stars = this.container.querySelectorAll('.star');
        // console.log(this.stars);

        this.filled = 0;

        this.bindEvents();

    }

    bindEvents() {
        this.container.addEventListener('click', (event) => {
            this.onStarClick(event);
        });

        this.container.addEventListener('mouseover', (event) => {
            this.onStarMouseOver(event);
        });

        this.container.addEventListener('mouseleave', () => {
            this.onRestoringRating();
        });
    }

    onStarClick(event) {
        // console.log(event);
        const classElement = event.target.classList[0];
        console.log(classElement);

        if (classElement !== 'star') return;

        const currentElemClicked = event.target.dataset.index;
        // console.log(event.target.dataset);
        // console.log(currentElemClicked);
        
        this.fillStars(currentElemClicked);
        this.filled = currentElemClicked;

        this.updateRatings(currentElemClicked);
    }

    fillStars(count) {
        console.log(count);

        for (let i = 0; i < 5; i++){
            this.stars[i].classList.remove('star-filled');
        }

        for (let i = 0; i < count; i++) {
            this.stars[i].classList.add('star-filled');
        }

    }

    updateRatings(count) {
       document.getElementById('count').innerText =  `Rating Count: ${count}`
    }

    onStarMouseOver(event) {
        // console.log(event);
        const currHoveredElem = event.target.dataset.index;
        // console.log(currHoveredElem)
        this.fillStars(currHoveredElem);
    }

    onRestoringRating() {
        // console.log('Mouse is leaving');
        this.fillStars(this.filled);
    }
}

new StarRating('#star-container');

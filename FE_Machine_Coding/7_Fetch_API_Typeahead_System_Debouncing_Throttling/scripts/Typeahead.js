
import { debounce } from '../utils/debounce.js';
// import { throttle } from '../utils/throttling.js';

class Typehead {
    constructor(inputElement, suggestionsList, options) {
        this.inputElement = inputElement;
        this.suggestionsList = suggestionsList;
        this.options = options;

        // debounced version of handleInput
        this.debouncedInputHandle = debounce(this.handleInput.bind(this), 300);

        this.inputElement.addEventListener('input', this.debouncedInputHandle);
        this.suggestionsList.addEventListener('click', this.handleSuggestions.bind(this));
    }

    handleInput() {
        const inputText = this.inputElement.value.toLowerCase();
        const filteredData = this.options.filter((option) => {
            const lowercaseData = option.toLowerCase();
            return lowercaseData.includes(inputText);
        });

        this.showSuggestions(filteredData);
    }

    showSuggestions(suggestions) {
        this.suggestionsList.innerHTML = '';
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            this.suggestionsList.appendChild(li);
        });
    }

    handleSuggestions(event) {
        const clickedSuggestion = event.target.textContent;
        this.inputElement.value = clickedSuggestion;
        this.suggestionsList.innerHTML = '';
    }

}

const inputElem = document.getElementById('typeahead-input');
const suggestionsList = document.getElementById('suggestionList');
const options = ['apple', 'banana', 'watermelon', 'mango'];

const typeahead = new Typehead(inputElem, suggestionsList, options);
/***
 *  Usecases of Nested comment box:
 *    -  blogs web apps.
 *    -  JIRA or confluence page.
 *    -  Facebook, instagram, twitter -> Social media web apps / apps
 *    -  slack channel, Microsoft Teams
 *  
 *  Requirements:
 *    - you need create an input field to take the text and a button for adding a comment.
 *    - After clicking of button need to add the text entered in input field with a reply button
 *    
 *  Approach:
 *    - need a input field and a button
 *    - attach an event on add button and create an element with entered text and reply button
 *    - if i click on reply button, again input field with button has to apprear with respect to that comment/ thread.
 */
import { isStringEmpty } from './utils/stringUtil.js';
class CommentBox {
    constructor() {
        this.commentInput = document.getElementById('commentInput');
        this.addCommentBtn = document.getElementById('addCommentBtn');
        this.commentList = document.getElementById('commentList');

        this.addComment = this.addComment.bind(this);

        this.addCommentBtn.addEventListener('click', this.addComment);
    }

    addComment() {
        const commentText = this.commentInput.value.trim();

        if (!isStringEmpty(commentText)) {
            const newComment = this.createCommentElement(commentText);
            this.commentList.appendChild(newComment);
            this.commentInput.value = '';
        }
    }

    createCommentElement(text) {
        const li = document.createElement('li');
        const commentDiv = document.createElement('div');
        commentDiv.textContent = text;
        li.appendChild(commentDiv);
         
        const replyBtn = document.createElement('button')
        replyBtn.textContent = 'reply';
        replyBtn.addEventListener('click', this.showReplyInput.bind(this));

        li.appendChild(replyBtn);

        return li;
    }

    showReplyInput(event) {
        const replyBtn = event.target;

        const li = replyBtn.parentElement;

        const replyContainer = document.createElement('div');
        replyContainer.classList.add('reply-container');
        li.appendChild(replyContainer);

        const replyInput = document.createElement('input');
        replyInput.type = 'text';
        replyInput.placeholder = 'Reply of your comment here...';

        const replyAddBtn = document.createElement('button');
        replyAddBtn.textContent = 'Add Reply';

        replyAddBtn.addEventListener('click', this.addReply.bind(this, replyContainer, replyInput));
       
        replyContainer.appendChild(replyInput);
        replyContainer.appendChild(replyAddBtn);

    }

    addReply(replyContainer, replyInput) {
        const replyTxt = replyInput.value.trim();

        if (!isStringEmpty(replyTxt)) {
            const replyLi = this.createCommentElement(replyTxt);
            replyContainer.appendChild(replyLi);
            replyInput.value = '';
        }
    }
}

new CommentBox();
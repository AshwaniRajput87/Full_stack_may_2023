class KanbanBoard {

   constructor() {
      this.toolboxContainer = document.querySelector(".toolbox-cont");
      this.modal = document.querySelector('.modal-overlay');
      this.closeBtn = document.querySelector('.modal-close-btn');
      this.addCardBtn = document.querySelector('.add-card');
      this.textArea = document.querySelector('.textarea-cont');
      this.mainCont = document.querySelector('.main-cont');
      this.allPriorityColorElems = document.querySelectorAll('.priority-color');
      this.removeBtn = document.querySelector('.remove-btn');
        
      this.addModal = true;
      this.colors = ['red', 'green', 'blue', 'black'];
      this.modalPriorityColor = 'black';
      this.removeFlag = false;

      this.ticketArr = [];

      this.toolboxContainer.addEventListener('click', this.handleToolboxClick.bind(this));
      this.closeBtn.addEventListener('click', this.closeModal.bind(this));
      this.addCardBtn.addEventListener('click', this.handleAddCardClick.bind(this));
      this.textArea.addEventListener('keydown', this.handleTextareaKeydown.bind(this));

      this.loadTicketsFromLocalStorage();

      for (const priotyColorElem of this.allPriorityColorElems) {
         priotyColorElem.addEventListener('click', this.handlePriotyColorClick.bind(this, priotyColorElem));
      }
   }

   handleToolboxClick(event) {
      const targetClassList = event.target.classList;

      if (targetClassList.contains('fa-plus')) {
         this.toggleModal();
      } else if (targetClassList.contains('color')) {
         this.filterTicketsByColor(targetClassList[1]);
      } else if (targetClassList.contains('fa-trash')) {
         this.toggleRemoveFlag();
      }
   }

   toggleModal() {
      this.modal.style.display = this.addModal ? 'flex' : 'none';
      this.addModal = !this.addModal;
   }

   closeModal() {
      this.toggleModal();
   }

   handleAddCardClick() {
      const task = this.textArea.value;
      if (task.trim().length > 0) {
         this.createTicket(task);
      }
   }

   createTicket(task) {
      if (task.trim().length === 0) {
         return;
      }

      const id = new ShortUniqueId().randomUUID();

      const ticketCont = this.createTicketElement(task, id, this.modalPriorityColor);
      this.mainCont.appendChild(ticketCont);
      this.ticketArr.push({id, task, color: this.modalPriorityColor});

      this.clearTextareaAndcloseModal();
      
      this.updateLocalStorage();
      this.handleLockUnlockTicket(ticketCont, id);
      this.handlePriorityColorChange(ticketCont, id);
      this.handleDelete(ticketCont, id);
   }

   createTicketElement(task, id, color) {
      const ticketCont = document.createElement('div');
      ticketCont.className = 'ticket-cont';
      ticketCont.innerHTML = `
            <div class="ticket-color ${color}"></div>
            <div class="ticket-id">#${id}</div>
            <div class="ticket-area">${task}</div>
            <div class="lock-unlock">
                <i class="fa-solid fa-lock"></i>
            </div>
        `;

      return ticketCont;
   }

   clearTextareaAndcloseModal() {
      this.textArea.value = '';
      this.closeModal();
   }

   updateLocalStorage() {
      const arr = JSON.stringify(this.ticketArr);
      localStorage.setItem('tickets', arr);
   }

   loadTicketsFromLocalStorage() {
      const storedTickets = localStorage.getItem('tickets');
      if (storedTickets) {
         this.ticketArr = JSON.parse(storedTickets);
         this.renderStoredTickets();
      }
   }

   renderStoredTickets() {
      for (const ticket of this.ticketArr) {
         this.appendTicketElement(ticket.task, ticket.id, ticket.color);
      }
   }

   appendTicketElement(task, id, color) {
      const ticketCont = this.createTicketElement(task, id, color);
      this.mainCont.appendChild(ticketCont);
      this.handleLockUnlockTicket(ticketCont, id);
      this.handlePriorityColorChange(ticketCont, id);
      this.handleDelete(ticketCont, id);
   }

   handlePriotyColorClick(priotyColorElem) {
      this.deacvtivatePriorityColor();
      this.activatePriorityColor(priotyColorElem);
      this.modalPriorityColor = priotyColorElem.classList[1];
   }

   deacvtivatePriorityColor() {
      for (const priotyColorElem of this.allPriorityColorElems) {
         priotyColorElem.classList.remove('active');
      }
   }

   activatePriorityColor(priotyColorElem) {
      priotyColorElem.classList.add('active');
   }

   filterTicketsByColor(selectedColor) {
      const allTicketsColor = document.querySelectorAll('.ticket-color');
      for (const ticketColor of allTicketsColor) {
         const currentTicketColor = ticketColor.classList[1];
         const displayStyle = currentTicketColor === selectedColor ? 'block' : 'none';
         ticketColor.parentElement.style.display = displayStyle;
      }
   }

   handleLockUnlockTicket(ticketCont, id) {
      const unlockTicketBtn = ticketCont.querySelector('.lock-unlock i');
      const taskArea = ticketCont.querySelector('.ticket-area');

      unlockTicketBtn.addEventListener('click', () => {
         unlockTicketBtn.classList.toggle('fa-lock');
         unlockTicketBtn.classList.toggle('fa-unlock');
         console.log(unlockTicketBtn.classList);

         const contentEditable = unlockTicketBtn.classList.contains('fa-unlock');
         taskArea.contentEditable = contentEditable;

         const idx = this.ticketArr.findIndex((obj) => obj.id === id);
         this.ticketArr[idx].task = taskArea.innerText;

         this.updateLocalStorage();
      });
   }

   handlePriorityColorChange(ticketCont, id) {
      const ticketColor = ticketCont.querySelector('.ticket-color');

      ticketColor.addEventListener('click', () => {
         const currentColor = ticketColor.classList[1];
         const currrentColorIdx = this.colors.findIndex((color) => color === currentColor);
         console.log(currrentColorIdx);
         const nextColorIdx = (currrentColorIdx + 1) % this.colors.length;
         const nextColor = this.colors[nextColorIdx];
         ticketColor.classList.remove(currentColor);
         ticketColor.classList.add(nextColor);
         const idx = this.ticketArr.findIndex((obj) => obj.id === id);
         this.ticketArr[idx].color = nextColor;
         this.updateLocalStorage();
      });
   }

   toggleRemoveFlag() {
      this.removeFlag = !this.removeFlag;
      this.removeBtn.style.color = this.removeFlag ? 'red' : 'black';
   }

   handleDelete(ticketCont, id) {
      ticketCont.addEventListener('click', () => {
         if (this.removeFlag) {
            ticketCont.remove();
            const idx = this.ticketArr.findIndex((obj) => obj.id === id);
            this.ticketArr.splice(idx, 1);
            this.updateLocalStorage();
         }
      });
   }

   handleTextareaKeydown(event) {
      console.log(event.key);
      if (event.key === 'Enter') {
         const task = this.textArea.value;
         this.createTicket(task);
      }
   }
}

new KanbanBoard();
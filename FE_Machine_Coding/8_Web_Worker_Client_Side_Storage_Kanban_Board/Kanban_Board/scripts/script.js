class KanbanBoard {

   constructor() {
      this.toolboxContainer = document.querySelector(".toolbox-cont");
      this.modal = document.querySelector('.modal-overlay');
      this.closeBtn = document.querySelector('.modal-close-btn');
      this.addCardBtn = document.querySelector('.add-card');
      this.textArea = document.querySelector('.textarea-cont');
      this.mainCont = document.querySelector('.main-cont');
      this.allPriorityColorElems = document.querySelectorAll('.priority-color');

      this.addModal = true;
      this.color = ['red', 'green', 'blue', 'black'];
      this.modalPriorityColor = 'black';

      this.ticketArr = [];

      this.toolboxContainer.addEventListener('click', this.handleToolboxClick.bind(this));
      this.closeBtn.addEventListener('click', this.closeModal.bind(this));
      this.addCardBtn.addEventListener('click', this.handleAddCardClick.bind(this));

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

      this.clearTextareaAndcloseModal();
      this.ticketArr.push({
         id,
         task,
         color: this.modalPriorityColor
      });
      this.updateLocalStorage();
      this.handleLockUnlockTicket(ticketCont, id);
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
}

new KanbanBoard();
const openModalBtn = document.querySelectorAll('.openModal');
const closeModalBtn = document.querySelectorAll('.closeModal');
const closeModalContainer = document.querySelectorAll('.modal');
let currentModal = '';

openModalBtn.forEach(btn => {
	btn.addEventListener('click', (el) => { 
		let modalId = btn.getAttribute('data-modal-id');
		if (modalId == '' || modalId == null) return;
		toggleModal(modalId);
		currentModal = modalId;
	});	
});

closeModalBtn.forEach(btn => { 
	btn.addEventListener('click', (el) => { 
		let modalId = btn.closest('.modal').getAttribute('data-modal-id');
		if (modalId == '' || modalId == null) return;
		toggleModal(modalId);
		currentModal = '';
	});	
});

closeModalContainer.forEach(container => { 
	container.addEventListener('click', (el) => { 
		
		if (el.target.classList.contains('open')) { 
			toggleModal(currentModal);
			currentModal = '';
		}
	});	
});

function toggleModal(id) { 
	let modal = document.querySelector(`.modal[data-modal-id='${id}']`);
	if (!modal || modal == null) return;
	currentModal = id;
	modal.classList.toggle('open');
}


/* document.addEventListener('click', (e) => { 	
	if (e.target.classList.contains('openModal') || e.target.classList.contains('modal')) return;	
	let clicked = e.target.closest('.modal');	
	if (!clicked || clicked === null) { 
		toggleModal(currentModal);
		currentModal = '';
	}			
}); */






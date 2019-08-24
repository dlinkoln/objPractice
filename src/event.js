document.body.onload = () => {
    let cont = document.getElementById('container');
    cont.onclick = (e) => {
        let clickedElem = e.target;
        let classElem = clickedElem.getAttribute('class');
        if (classElem == 'remove-button') {
            let deletedBlock = clickedElem.closest('.pane');
            deletedBlock.classList.add('d-none');
        }
    }
};

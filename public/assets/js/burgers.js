document.addEventListener('DOMContentLoaded', (event)=> {
    if(event){
        console.log('DOM loaded');
    }

    //create a burger button//
    //Creating initial code//

    const createBurgerButton = document.getElementById('burger-form');

    if(createBurgerButton){
        createBurgerButton.addEventListener('submit', (event) => {
            event.preventDefault();
        })

        const newBurgerName = {
            name: document.getElementById('bur').value.trim(),
        };

        fetch('/api/burgers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(()=> {
            document.getElementById('bur').value = '';

            console.log('Created a new cat!');
            location.reload();
        });
    };

});
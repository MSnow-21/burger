document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.log('DOM loaded');
    }

    //Devouring the burger initial code

    const devourBurgerButton = document.querySelectorAll('.change-burger');

    if(devourBurgerButton){
        devourBurgerButton.forEach((button) => {
            button.addEventListener('click', (e) => {
                console.log('test');

                const id = e.target.getAttribute('data-id');
                const newBurger = e.target.getAttribute('data-newburger');

                const newBurgerState = {
                    devoured: newBurger,
                };

                fetch(`api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(newBurgerState),
                }).then((response) => {
                    if(response.ok){
                        console.log(`changed devoured to: ${newBurger}`);
                        location.reload('/');
                    }else{
                        alert('something went wrong!')
                    }
                });
            });

        });
    }

    //Creating the burger initial code

    const createBurgerButton = document.getElementById('create-form');

    if(createBurgerButton){
        createBurgerButton.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newChoice = {
                burger_name: document.getElementById('bu').value.trim(),
                devoured: document.getElementById('devoured').checked,
            };
            
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newChoice),
            
            }).then(() => {
                document.getElementById('bu').value = '';
                console.log('Created a new burger!');
                location.reload();
            })
        });
    };

});
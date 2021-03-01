document.addEventListener('DOMContentLoaded', (event)=> {
    if(event){
        console.log('DOM loaded');
    }

    //Devouring the burger initial code

    const devourBurgerButton = document.getElementById('.devoured-burger');

    if(devourBurgerButton){
        devourBurgerButton.forEach((button) => {
            button.addEventListener('click', (event) => {
                console.log('test');

                const id = event.target.getAttribute('data-devourburger');

                const newBurgerState = {
                    devoured: newDevoured,
                };

                fetch(`api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(newBurgerState);
                }).then((response) => {
                    if(response.ok){
                        console.log(`changed sleep to: ${newDevoured}`);
                        location.reload('/');
                    }else{
                        alert('something went wrong!')
                    }
                });
            });

        });
    }

    //Creating the burger initial code

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

            console.log('Created a new burger!');
            location.reload();
        });
    };

});
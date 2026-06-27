// Search Bar Functionality
        const searchBar = document.getElementById('searchBar');
        const recipes = document.getElementsByClassName('recipe');

        searchBar.addEventListener('keyup', function(e){
            const term = e.target.value.toLowerCase();
            Array.from(recipes).forEach(function(recipe){
                const title = recipe.querySelector('h2').textContent.toLowerCase();
                const description = recipe.querySelector('.description').textContent.toLowerCase();
                const tip = recipe.querySelector('.tip').textContent.toLowerCase();

                if(title.includes(term) || description.includes(term) || tip.includes(term)){
                    recipe.style.display = '';
                } else {
                    recipe.style.display = 'none';
                }
            });
        });
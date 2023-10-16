const input = document.getElementById('input');
        const center1 = document.getElementById('center1');
        const center2 = document.getElementById('center2');
        const ubahBackgroundButton = document.getElementById('ubahBackground');
        const addFooter = document.getElementById('addFooter');

        ubahBackgroundButton.addEventListener('click', function() {
            // Periksa apakah teks yang dimasukkan adalah "merah" dan setel latar belakang kolom 1 sesuai kondisi
            if (input.value.toLowerCase() === 'merah') {
                center1.classList.add('merah');
            } else {
                center1.classList.remove('merah');
            }
        });
        ubahBackgroundButton.addEventListener('click', function() {
            // Periksa apakah teks yang dimasukkan adalah "merah" dan setel latar belakang kolom 1 sesuai kondisi
            if (input.value.toLowerCase() === 'biru') {
                center2.classList.add('biru');
            } else {
                center2.classList.remove('biru');
            }
        });
        
        ubahBackgroundButton.addEventListener('click', function() {
            // Periksa apakah teks yang dimasukkan adalah "merah" dan setel latar belakang kolom 1 sesuai kondisi
            if (input.value.toLowerCase() === 'kuning') {
                center3.classList.add('kuning');
            } else {
                center3.classList.remove('kuning');
            }
        });
        
        ubahBackgroundButton.addEventListener('click', function() {
            // Periksa apakah teks yang dimasukkan adalah "merah" dan setel latar belakang kolom 1 sesuai kondisi
            if (input.value.toLowerCase() === 'ungu') {
                center4.classList.add('ungu');
            } else {
                center4.classList.remove('ungu');
            }
        });
        ubahBackgroundButton.addEventListener('click', function() {
            // Periksa apakah teks yang dimasukkan adalah "merah" dan setel latar belakang kolom 1 sesuai kondisi
            if (input.value.toLowerCase() === 'pink') {
                center5.classList.add('pink');
            } else {
                center5.classList.remove('pink');
            }
        });
        addFooter.addEventListener("click", function(){
            const container = document.getElementsByClassName('Container')[0];

            const teks = document.createTextNode('ini adalah footer');
            const h1 = document.createElement('h1');
            const footer = document.createElement('div');
            footer.setAttribute("class","footer");

            h1.appendChild(teks);
            footer.appendChild(h1);
            container.appendChild(footer);
        })

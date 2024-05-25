var div = document.getElementById('personal');
var div2 = document.getElementById('container');
var bt = document.getElementById('Hide');
var display = 0;

function hideClick() {

    if (display == 1) {

        div.style.display = 'flex';
        div2.style.maxHeight = '100%';
        div2.style.maxWidth = '100%';
        div2.style.marginRight = '0px';
        div2.style.transition = '0.9s';
        display = 0;

    } else {

        div.style.display = 'none';
        div2.style.maxHeight = '1%';
        div2.style.maxWidth = '1%';
        div2.style.marginRight = '200px';
        div2.style.transition = '0.9s';

        display = 1;

    }

}

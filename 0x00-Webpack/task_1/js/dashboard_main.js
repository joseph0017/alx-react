import $ from 'jquery';
import _ from 'lodash';

const doll = $;

doll('body').append('<p>Holberton Dashboard</p>')
doll('body').append('<p>Dashboard data for the students</p>')
doll('body').append('<button>Click here to get started</button>')
doll('body').append("<p id='count'></p>")
doll('body').append('<p>Copyright - Holberton School</p>')

let updateCount = 0;

function updateCounter() {
    let btnCounter = doll('#count');
    updateCount++;
    btnCounter.html(`${updateCount} clicks on the button`);
}

doll('button').on('click', _.debounce(updateCounter, 500))
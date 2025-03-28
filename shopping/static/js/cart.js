var updateBtns = document.getElementsByClassName('update-cart')

for (var i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function () {
        var productId = this.dataset.product;
        var action = this.dataset.action;

        console.log('Product ID:', productId, 'Action:', action);
        console.log('USER:', user);

        if (user === 'AnonymousUser') {
            console.log('User not logged in');
            // Optionally redirect to login or show a message
        } else {
            updateUserOrder(productId, action);
        }
    });
}

function updateUserOrder(productId, action) {
    console.log('User is logged in, sending data...');

    var url = '/update_item/';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        credentials: 'same-origin',
        body: JSON.stringify({ 'productId': productId, 'action': action }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Response data:', data);
        location.reload();
    });
}

function render(a) {
    return `
        <tr>
            <th>${a.name}</th>
            <th>${a.description}</th>
            <th>${a.price}</th>
            <th><img src="http://159.65.21.42:9000${a.image}" width="50" height="50"></th>
            <th>${a.quantity}</th>
            <th>
                <a href="edit.html?id=${a._id}" class="edit"><button>Edit</button></a>
                <a data-id="${a._id}" class="delete"><button>Delete</button></a>
            </th>
        </tr>
    `;
}

function load() {
    $.ajax({
        type: "GET",
        url: "http://159.65.21.42:9000/products",
        success: function (res) {
            for (let i = 0; i < res.length; i++) {
                let d = res[i];
                if (d.category == "Neophytegarments") {
                    console.log(d);
                    let html = render(d);
                    $('.productx').append(html);
                }
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
}

load();
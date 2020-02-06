$.ajax({
    type: "post",
    url: "./static/json/article.json",
    data: "",
    dataType: 'jsonp',  
    crossDomain: true,  
    success: function (response) {
        console.log(response);
        alert(response);
    },
    error: function (error) {
        console.log(error);
    }
});


var app = new Vue({
    el: 'nav',
    data: {
        action: [
            { text: 'search' ,link : 'null'},
            { text: 'message' ,link : 'null'},
            { text: 'about' ,link : 'null'},
            { text: 'setting' ,link : 'null'}
        ]
    }
});

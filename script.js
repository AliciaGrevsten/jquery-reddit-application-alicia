$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'https://www.reddit.com/r/programmerhumor/top.json?limit=100',
        dataType: 'json'
    }).done(function(data) {

        $.map(data.data.children, function(post, i) {
            $('#posts').append(
                '<div class="col-4-lg">' +
                    '<div class="card">' +
                        '<div class="card-body">' +
                            '<h4 class="card-title" id="title">' + post.data.title + '</h4>' + 
                            '<a href="https://www.reddit.com/' + post.data.permalink + '" class="card-link">' + post.data.permalink + '</a>' +
                            '<h6 class="card-subtitle mb-2 text-muted"> Author: ' + post.data.author + 
                            '</h6></div></div></div><br>');
        });

    });


    $('.card').hover(
        function() {
            $(this).animate({
                marginRight: '-=10%',
                marginLeft: '+=10%'
            }, 200);
        },

        function() {
            $(this).animate({
                marginRight: '0%',
                marginLeft: '0%'
            }, 200);
        }
    );

});
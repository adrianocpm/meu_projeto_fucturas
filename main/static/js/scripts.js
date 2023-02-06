$(document).ready(function() {

    var baseUrl ='http://localhost:8000/';
    var deleteBtn = $('.delete-btn');
    var sttbtn = $('.stt-btn');
    var searchBtn =$('#search-btn');
    var searchForm =$('search-form');
    var filter = $('#filter');

    
    $(deleteBtn).on('click', function(e) {

        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Quer deletar este aluno?');

        if(result) {
            window.location.href = delLink;
        }

    });

    
});
$(document).ready(function () {
    $("#searchTerm").keypress(function(e){
        if (e.keyCode === 13) {
            var searchTerm = $("#searchTerm").val();
            var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchTerm + '&format=json&callback=?';
            $.ajax({
                url:url,
                type: "GET",
                async:false,
                dataType:"json",
                success: function (data,status,jqXHR){
                    $(".header").removeClass("marginTop");
                    $("#wikiInfo").html("");
                    for (var i = data[1].length -1; i >= 0;i--) {
                        $("#wikiInfo").prepend('<div><a href="'+data[3][i]+'" target="_blank" class="resultLinks"><div class="well results"><h2>'+ data[1][i]+'</h2><p>'+ data[2][i] + '</p></div></a></div></div>');

                    }
                }
            }); // END of AJAX
        } // END of if statement
    }); // END of Keypress


    $("#searchBtn").on("click",function () {
        var searchTerm = $("#searchTerm").val();
        var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchTerm + '&format=json&callback=?';
        $.ajax({
            url:url,
            type: "GET",
            async:false,
            dataType:"json",
            success: function (data,status,jqXHR){
                $(".header").removeClass("marginTop");
                $("#wikiInfo").html("");
                for (var i = data[1].length - 1; i >= 0; i--) {
                    $("#wikiInfo").prepend('<div><a href="'+data[3][i]+'" target="_blank" class="resultLinks"><div class="well results"><h2>'+ data[1][i]+'</h2><p>'+ data[2][i] + '</p></div></a></div></div>');
                }

        }
        });
    });
}); // END of Document Ready
/**
 * Created by nikita on 18.февраля.2016.
 */
$(function (){

    content = $('.contentPhotos');
    photo = $('#photoMore');
    //http://localhost:63342/instagram/#access_token=1273986390.3904bbe.64b4fd3142d4488791555ad1b4105724

    //https://api.instagram.com/v1/users/glowflame146/?access_token=1273986390.3904bbe.64b4fd3142d4488791555ad1b4105724

    function addProfilePicture(){
        $.getJSON("https://api.instagram.com/v1/users/self/?callback=?&access_token=1273986390.3904bbe.64b4fd3142d4488791555ad1b4105724", function(JSON) {

            var urlAvatar = JSON.data.profile_picture;
            $(".right_menu_a").append("<img src="+urlAvatar+" class=myProfile>");

        });

    }
    addProfilePicture();

    access_token= document.location.href.split("access_token=")[1];


    $("#hashtagSearchRow").keypress(function(){
        $(content).empty();
        hashtag = document.getElementById("hashtagSearchRow").value;
        setPhotosWithHashtag(hashtag);
    });

    $("#buttonSearch").click(function(){
        $(content).empty();
        hashtag = document.getElementById("hashtagSearchRow").value;
        setPhotosWithHashtag(hashtag);

    });

    $(".buttonMore").click(function(){
        $(content).empty();
        hashtag = document.getElementById("hashtagSearchRow").value;
        setPhotosWithHashtag(hashtag);
    })

});


function setPhotosWithHashtag(hashtag){
    $.getJSON("https://api.instagram.com/v1/tags/"+hashtag+"/media/recent?callback=?&count=14&access_token="+access_token, function(json) {
        for (i=0; i<2; i++){
            var url = json.data[i].images.low_resolution.url;
            addImage(url);
        }
    });

    $('.buttonMoreContainer').empty();
    $('.buttonMoreContainer').append(" <button class=buttonMore id=buttonMore>ЕЩЁ</button> ");
}

function addImage(url){
    console.log(url);
    $(content).append(" <div class='photo' id='photoMore'><a class='fancybox' rel='group' href='"+url+"'><img src='"+url+"'>asdfs</a> </div>");

}
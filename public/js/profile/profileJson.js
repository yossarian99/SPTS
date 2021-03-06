

$(function(){

    function loadRates() {
        var id = window.location.href.slice(-1);
        $.getJSON('http://pri.me/api/profiles/'+id)
        .done (function(data){
            var name = "";
            var city = "";
            var stars ="";
            var phone ="";
            var email ="";
            var facebook ="";
            var instagram ="";
            var reviews = "";
            var description = "";
            var certificates = "";
            var education = "";
            var offert = ""
            $.each(data, function(index, element) {
                console.log(element)
                //gwiazdki
                for( var j = 0; j < element.rating ; j++ ){
                  stars += '<span class="fa fa-star green-star-checked"></span>';
                }
                for(var k = 0; k < (5-element.rating); k++){
                  stars += '<span class="fa fa-star green-star"></span>';
                }
                stars +="<span class='rating-info'>("+element.rating+"/5)</span>";

                //imię + nazwisko
                if(element.name && element.surname){
                    name+= element.name +" "+element.surname;
                }else{
                    name+= "Brak danych"
                }
                //miasto + województwo
                if(element.tr_loc){
                    $.each(element.tr_loc,function(ind,ele){
                        city+= ele.city+ ", "+ele.voivodeship;
                    });
                }else{
                    city+= "Brak danych"
                }
                //telefon
                if(element.phone){
                    phone+= element.phone;
                }else{
                    phone+= "Brak danych"
                }
                //email
                if(element.email){
                    email+= element.email;
                }else{
                    email+= "Brak danych"
                }
                //facebook
                if(element.facebook){
                    facebook+= "<a href='http://"+element.facebook+"' target='_blank'>Zobacz profil</a>";
                }else{
                    facebook += "Brak danych";
                }
                //instagram
                if(element.instagram){
                    instagram+= "<a href='http://"+element.instagram+"' target='_blank'>Zobacz profil</a>";;
                }else{
                    instagram += "Brak danych";
                }

                //Doświadczenie i umiejętności
                if(element.description){
                    description+= element.description;
                }else{
                    description += "Brak danych";
                }
                // certyfikaty
                $.each(element.tr_cert, function(ind,ele){
                    if(ele.name_of_institution){
                        certificates+= "<p>"+ele.name_of_institution+ " - ";
                    }
                    if(ele.name_of_course){
                        certificates+= ele.name_of_course+ " - ";
                    }
                    if(ele.begin_date){
                        certificates+=" :  "+(ele.begin_date);
                    }
                    if(ele.end_date){
                        certificates+= " - "+(ele.end_date)+ "</p>";
                    }
                });

                // Wykształcenie
                $.each(element.tr_uni, function(ind,ele){
                    if(ele.university){
                        education+= "<p>"+ele.university+ " - ";
                    }
                    if(ele.course){
                        education+= ele.course;
                    }
                    if(ele.degree){
                        education+=" -  "+(ele.degree);
                    }
                    if(ele.begin_date){
                        education+= " - "+(ele.begin_date);
                    }
                    if(ele.end_date){
                        education+= " : "+(ele.end_date)+ "</p>";
                    }
                });
                // $.each(element.tr_pl,function(ind,ele){

                //     description+= "</br> </br> Lokaliacja : "+ele.place;
                // });

                // Cennik
                $.each(element.tr_off,function(ind,ele){
                    offert+= "<tr><td>"+ele.name+"</td><td> "+ele.max_no_of_clients+" os.</td><td>"+ele.price+" zł</td>";
                    
                });

                //Opinie
                $.each(element.tr_op,function(ind,ele){
                    var array = ele.created_at.split(' ');

                    reviews += "<div class='review-header'>";
                    reviews += "<span class='review-header-name'>"+ele.name+" " +array[0]+"</span>";
                    reviews += "<span class='review-header-rating'>";
                    reviews +="<span class='rating-info'>("+ele.rating+"/5)</span>";
                    for( var j = 0; j < ele.rating ; j++ ){
                        reviews += '<span class="fa fa-star green-star-checked"></span>';
                      }
                      for(var k = 0; k < (5-ele.rating); k++){
                        reviews += '<span class="fa fa-star dark-star"></span>';
                      }

                    reviews += "</span></div><div class='review-content'>";
                    reviews += ele.description;
                    reviews += "</div>";
                });

             });
           // $(".categories:eq(2)").html(offert);
           // $(".categories:eq(4)").prepend(reviews);
            //$(".detail-list").html(msg);
            //$(".categories:first").html(description);
            $(".stars-info").html(stars);
            $("#name-info").text(name);
            $("#city-info").text(city);
            $("#phone-info").text(phone);
            $("#mail-info").text(email);
            $("#fb-info").html(facebook);
            $("#inst-info").html(instagram);
            $(".categories-content:eq(0)").text(description);
            $(".categories-content:eq(1)").html(certificates);
            $(".categories-content:eq(2)").html(education);
            $(".categories-content:eq(6)").prepend(reviews);
            $("#price-table").append(offert);
            
        
        });    
        
        
        }
        
        loadRates();
        





})






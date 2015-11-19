 function analog (){
        $('#clock').fadeOut('slow', "linear",function(){

          $('.clock-circle').fadeIn('slow',"linear");
          });
        }
      //make digital clock disappear
        function digital(){

            $('.clock-circle').fadeOut('slow', "linear",function(){
          $('#clock').fadeIn('slow',"linear");
          });

        }
        function dateFade (){
        $('.date').fadeOut('slow', "linear",function(){
          $('#divCalendar').fadeIn('slow',"linear");
          });
        }
        function calender(){

            $('#divCalendar').fadeOut('slow', "linear",function(){
          $('.date').fadeIn('slow',"linear");
          });

        }
        function wFade (){
        $('#weather').fadeOut('slow', "linear",function(){
          $('#weather_detail').fadeIn('slow',"linear");
          });
        }
        function w_detailFade(){

            $('#weather_detail').fadeOut('slow', "linear",function(){
          $('#weather').fadeIn('slow',"linear");
          });

        }      
        //code for weather   
       
        //code to make digital clock
 function updateClock ( )
            {
              var d = new Date ( );
              var m = d.getMinutes ( );
              var s = d.getSeconds ( );
              var h = d.getHours ( );
              if (s<10) 
                s = "0" + s; 
              if (m<10) 
                m = "0" + m;
              if ( h < 12 )
                var timeOfDay = "AM";
              else var timeOfDay ="PM";
              
              if (h>12)
                h= h-12;
              if (h==0)
                h=12;

              var Str = h + ":" + m + ":" + s + " " + timeOfDay;
              document.getElementById("clock").firstChild.nodeValue = Str;
              
              s = d.getSeconds()* 6;
              m = d.getMinutes()* 6 + s / 60;
              h = ((d.getHours() % 12) / 12) * 360 + 90 + m / 12;
              jQuery('#hour').css("transform", "rotate(" + h + "deg)");
              jQuery('#minute').css("transform", "rotate(" + m + "deg)");
              jQuery('#second').css("transform", "rotate(" + s + "deg)");

            }
        function date(){
    
            var d = new Date();
            document.getElementById("day").innerHTML = d.getDate();
            document.getElementById("year").innerHTML = d.getFullYear();

            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            document.getElementById("month").innerHTML = month[d.getMonth()];
            var day  = new Array();
            day[1] = "Mon";
            day[2] = "Tue";
            day[3] = "Wed";
            day[4] = "Thu";
            day[5] = "Fri";
            day[6] = "Sat";
            day[0] = "Sun";
            document.getElementById("dd").innerHTML = day[d.getDay()];
        }

        //FOR CALENDER 
         divId =document.getElementById('divCalendar');
          
          var day  = new Array();
                day[0] = "Mon";
                day[1] = "Tue";
                day[2] = "Wed";
                day[3] = "Thu";
                day[4] = "Fri";
                day[5] = "Sat";
                day[6] = "Sun";
         
          var month = new Array();
                month[0] = "January";
                month[1] = "February";
                month[2] = "March";
                month[3] = "April";
                month[4] = "May";
                month[5] = "June";
                month[6] = "July";
                month[7] = "August";
                month[8] = "September";
                month[9] = "October";
                month[10] = "November";
                month[11] = "December";
          
          var d = new Date();
          
          var cMonth = d.getMonth();
          var cYear = d.getFullYear();
          function previous() {
          if ( cMonth == 0 ) {
            cMonth = 11;
            cYear = cYear - 1;
          }
          else {
            cMonth = cMonth - 1;
          }
          display(cYear, cMonth);
        };
         function next() {
          if ( cMonth == 11 ) {
            cMonth = 0;
            cYear = cYear + 1;
          }
          else {
            cMonth = cMonth + 1;
          }
          display(cYear, cMonth);
        };
        
          function display(y, m) {
          
          var d = new Date();
           
          var first = new Date(y, m, 1).getDay()
            
          var last =  new Date(y, m+1, 0).getDate()
          if (m==0)
            var lastMonthlast = new Date(y-1, 11, 0).getDate();
          else
            var lastMonthlast = new Date(y, m, 0).getDate();
        
          var html= '<p id ="pp" onclick="calender()">back</p>';
           html += '<table>';
          
       
          
          html += '<tr><td> <p style="cursor: pointer;" onclick = "previous()"> < </p> </td> <td colspan="5" align="center">' + month[m] + ' - ' + y + '</td> <td align="right"> <p style="cursor: pointer;" onclick = "next()"> > </p> </td></tr>';
          
          
          html += '<tr style ="outline: 5px solid white;">';
          for(var i=0; i < day.length;i++) {
            html += '<td >' + day[i] + '</td>';
          }
          html += '</tr>';
          
          
          var i=1;
          do {
        
        var dow = new Date(y, m, i).getDay();
        
        
        if ( dow == 0 ) {
          html += '<tr>';
        }
        
        else if ( i == 1 ) {
          html += '<tr>';
          var k = lastMonthlast - first+1;
          for(var j=0; j < first; j++) {
            html += '<td align="center" class="not-current">' + k + '</td>';
            k++;
          }
        }
        
        
        if (i == d.getDate() && m == d.getMonth())
          html += '<td align="center" style="outline:2px solid white">' + i + '</td>';
        else html += '<td align="center">' + i + '</td>';
        
        if ( dow == 6 ) {
          html += '</tr>';
        }
        
        else if ( i == last ) {
          var k=1;
          for(dow; dow < 6; dow++) {
            html += '<td class="not-current">' + k + '</td>';
            k++;
          }
        }
        
        i++;
      }while(i <= last);
          
          
          html += '</table>';
          
         
          document.getElementById('divCalendar').innerHTML = html;
        };
        
       
        window.onload = function() {
          
          display(cYear, cMonth);
        }
        
        

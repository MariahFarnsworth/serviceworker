$(document).ready(function(){
    localStorage.clear();
    //clear local storage
    
    // The online/offline events are not triggered unless there is a change.
    // So you will want to start the ping if you are already online.
    if (window.navigator.onLine) {
        //check if your online
        console.log("You might be online.");
    }

        //BUTTON 1****************************************************************************************
            $('#button1').on('click', function(){
            //window.location.href = "purple.html";
             //when button  is clicked
            $('#colorHeading').html('');
             $('#colorMeaning').html('');
            //set the div to empty
                
                var ping = new XMLHttpRequest()
                //create a new ping to request data from the server
                var status;
                ping.open("HEAD", "https://mariahserviceworker.herokuapp.com/");
                //test to see if a website can be reached. HEAD Will go to the site without actually downloading anthing
                ping.send();
                //send the request
  
                ping.addEventListener("readystatechange", processRequest, false);
 
            function processRequest(e) {
            if (ping.readyState == 4) {
                if (ping.status >= 200 && ping.status < 304) {
                    console.log("Online");
                                    
                     $.getJSON('data1.json', function(data){
                        //get the json data from the file and define it as data
                        localStorage.setItem('button1Data', JSON.stringify(data, null, '\t'));
                         //store the data in local storage as buttonData and stringify the data
                        console.log('Selected color');
                        document.querySelector('#colorHeading').innerHTML = data["color"];
                        document.querySelector('#colorMeaning').innerHTML = data["meaning"];
                        //put the data color in the div
                        $('#button1').css({"background-color": "#0099ff", "color" : "white"});
                        $('html').css({"background" : "url('images/blue.gif') no-repeat center center fixed", "-webkit-background-size": "cover", " -moz-background-size": "cover", "-o-background-size": "cover", "background-size" : "cover"});
                        $('.content').css("margin-top","5%");
                     });
                
                } else {

                        console.log("connection doesn't exist!");
                        if(localStorage.getItem('button1Data') != undefined &&
                            localStorage.getItem('button1Data') != null) {
                                //check if the data is in cashe
                                var casheData = localStorage.getItem('button1Data');
                                //get the data from the cashe
                                casheData = JSON.parse(casheData);
                                //convert the data from text to a JS object
                                console.log("Cached data for " + casheData['color']);
                                document.querySelector('#colorHeading').innerHTML = casheData["color"];
                                document.querySelector('#colorMeaning').innerHTML = casheData["meaning"];
                                //put the data color in the div
                                 $('#button1').css({"background-color": "#0099ff", "color" : "white"});
                                    $('html').css({"background" : "url('images/blue.gif') no-repeat center center fixed", "-webkit-background-size": "cover", " -moz-background-size": "cover", "-o-background-size": "cover", "background-size" : "cover"});
                                    $('.content').css("margin-top","5%");
                            }
                        else{
                                //if the data is not in cashe
                                console.log("Non-Error Event. No cashed data");
                                document.querySelector('#colorMeaning').innerHTML = "Sorry, you are offline. There is no loaded cashe for this button."
                                 $('#colorMeaning').css("text-align", "center");
                        }


                }
            }
        }
                
              
        });

        //BUTTON 2****************************************************************************************************
        $('#button2').on('click', function(){
             //when button  is clicked
            $('#colorHeading').html('');
             $('#colorMeaning').html('');
            //set the div to empty
                
                var ping = new XMLHttpRequest()
                //create a new ping to request data from the server
                var status;
                ping.open("HEAD", "https://mariahserviceworker.herokuapp.com/");
                //test to see if a website can be reached. HEAD Will go to the site without actually downloading anthing
                ping.send();
                //send the request
  
                ping.addEventListener("readystatechange", processRequest, false);
 
            function processRequest(e) {
            if (ping.readyState == 4) {
                if (ping.status >= 200 && ping.status < 304) {
                    console.log("Online");
                                    
                     $.getJSON('data2.json', function(data){
                        //get the json data from the file and define it as data
                        localStorage.setItem('button2Data', JSON.stringify(data, null, '\t'));
                         //store the data in local storage as buttonData and stringify the data
                        console.log('Selected color');
                        document.querySelector('#colorHeading').innerHTML = data["color"];
                        document.querySelector('#colorMeaning').innerHTML = data["meaning"];
                        //put the data color in the div
                        $('#button2').css({"background-color": "#cc0000", "color" : "white"});
                        $('html').css({"background" : "url('images/red.gif') no-repeat center center fixed", "-webkit-background-size": "cover", " -moz-background-size": "cover", "-o-background-size": "cover", "background-size" : "cover"});
                        $('.content').css("margin-top","5%");
                     });
                
                } else {

                        console.log("connection doesn't exist!");
                        if(localStorage.getItem('button2Data') != undefined &&
                            localStorage.getItem('button2Data') != null) {
                                //check if the data is in cashe
                                var casheData = localStorage.getItem('button2Data');
                                //get the data from the cashe
                                casheData = JSON.parse(casheData);
                                //convert the data from text to a JS object
                                console.log("Cached data for " + casheData['color']);
                                document.querySelector('#colorHeading').innerHTML = casheData["color"];
                                document.querySelector('#colorMeaning').innerHTML = casheData["meaning"];
                                //put the data color in the div
                                 $('#button2').css({"background-color": "#cc0000", "color" : "white"});
                                    $('html').css({"background" : "url('images/red.gif') no-repeat center center fixed", "-webkit-background-size": "cover", " -moz-background-size": "cover", "-o-background-size": "cover", "background-size" : "cover"});
                                    $('.content').css("margin-top","5%");
                            }
                        else{
                                //if the data is not in cashe
                                console.log("Non-Error Event. No cashed data");
                                document.querySelector('#colorMeaning').innerHTML = "Sorry, you are offline. There is no loaded cashe for this button."
                                 $('#colorMeaning').css("text-align", "center");
                        }


                }
            }
        }
                
              
        });

        //BUTTON 3*******************************************************************************
         $('#button3').on('click', function(){
             //when button  is clicked
            $('#colorHeading').html('');
             $('#colorMeaning').html('');
            //set the div to empty
                
                var ping = new XMLHttpRequest()
                //create a new ping to request data from the server
                var status;
                ping.open("HEAD", "https://mariahserviceworker.herokuapp.com/");
                //test to see if a website can be reached. HEAD Will go to the site without actually downloading anthing
                ping.send();
                //send the request
  
                ping.addEventListener("readystatechange", processRequest, false);
 
            function processRequest(e) {
            if (ping.readyState == 4) {
                if (ping.status >= 200 && ping.status < 304) {
                    console.log("Online");
                                    
                     $.getJSON('data3.json', function(data){
                        //get the json data from the file and define it as data
                        localStorage.setItem('button3Data', JSON.stringify(data, null, '\t'));
                         //store the data in local storage as buttonData and stringify the data
                        console.log('Selected color');
                        document.querySelector('#colorHeading').innerHTML = data["color"];
                        document.querySelector('#colorMeaning').innerHTML = data["meaning"];
                        //put the data color in the div
                        $('#button3').css({"background-color": "#009933", "color" : "white"});
                        $('html').css({"background" : "url('images/green.gif') no-repeat center center fixed", "-webkit-background-size": "cover", " -moz-background-size": "cover", "-o-background-size": "cover", "background-size" : "cover"});
                        $('.content').css("margin-top","5%");
                     });
                
                } else {

                        console.log("connection doesn't exist!");
                        if(localStorage.getItem('button3Data') != undefined &&
                            localStorage.getItem('button3Data') != null) {
                                //check if the data is in cashe
                                var casheData = localStorage.getItem('button3Data');
                                //get the data from the cashe
                                casheData = JSON.parse(casheData);
                                //convert the data from text to a JS object
                                console.log("Cached data for " + casheData['color']);
                                document.querySelector('#colorHeading').innerHTML = casheData["color"];
                                document.querySelector('#colorMeaning').innerHTML = casheData["meaning"];
                                //put the data color in the div
                                 $('#buttone').css({"background-color": "#009933", "color" : "white"});
                                    $('html').css({"background" : "url('images/green.gif') no-repeat center center fixed", "-webkit-background-size": "cover", " -moz-background-size": "cover", "-o-background-size": "cover", "background-size" : "cover"});
                                    $('.content').css("margin-top","5%");
                            }
                        else{
                                //if the data is not in cashe
                                console.log("Non-Error Event. No cashed data");
                                document.querySelector('#colorMeaning').innerHTML = "Sorry, you are offline. There is no loaded cashe for this button."
                                 $('#colorMeaning').css("text-align", "center");
                        }


                }
            }
        }
                
              
        });

        //BUTTON 4
         $('#button4').on('click', function(){
             //when button  is clicked
            $('#colorHeading').html('');
             $('#colorMeaning').html('');
            //set the div to empty
                
                var ping = new XMLHttpRequest()
                //create a new ping to request data from the server
                var status;
                ping.open("HEAD", "https://mariahserviceworker.herokuapp.com/");
                //test to see if a website can be reached. HEAD Will go to the site without actually downloading anthing
                ping.send();
                //send the request
  
                ping.addEventListener("readystatechange", processRequest, false);
 
            function processRequest(e) {
            if (ping.readyState == 4) {
                if (ping.status >= 200 && ping.status < 304) {
                    console.log("Online");
                                    
                     $.getJSON('data4.json', function(data){
                        //get the json data from the file and define it as data
                        localStorage.setItem('button4Data', JSON.stringify(data, null, '\t'));
                         //store the data in local storage as buttonData and stringify the data
                        console.log('Selected colors');
                        document.querySelector('#colorHeading').innerHTML = data["color"];
                        document.querySelector('#colorMeaning').innerHTML = data["meaning"];
                        //put the data color in the div
                        $('#button4').css({"background-color": "#8600b3", "color" : "white"});
                        $('html').css({"background" : "url('images/purple.gif') no-repeat center center fixed", "-webkit-background-size": "cover", " -moz-background-size": "cover", "-o-background-size": "cover", "background-size" : "cover"});
                        $('.content').css("margin-top","5%");
                     });
                
                } else {

                        console.log("connection doesn't exist!");
                        if(localStorage.getItem('button4Data') != undefined &&
                            localStorage.getItem('button4Data') != null) {
                                //check if the data is in cashe
                                var casheData = localStorage.getItem('button4Data');
                                //get the data from the cashe
                                casheData = JSON.parse(casheData);
                                //convert the data from text to a JS object
                                console.log("Cached data for " + casheData['color']);
                                document.querySelector('#colorHeading').innerHTML = casheData["color"];
                                document.querySelector('#colorMeaning').innerHTML = casheData["meaning"];
                                //put the data color meaning in the ouput area div
                                 $('#button4').css({"background-color": "#8600b3", "color" : "white"});
                                    $('html').css({"background" : "url('images/purple.gif') no-repeat center center fixed", "-webkit-background-size": "cover", " -moz-background-size": "cover", "-o-background-size": "cover", "background-size" : "cover"});
                                    $('.content').css("margin-top","5%");
                            }
                        else{
                                //if the data is not in cashe
                                console.log("Non-Error Event. No cashed data");
                                document.querySelector('#colorMeaning').innerHTML = "Sorry, you are offline. There is no loaded cashe for this button."
                                 $('#colorMeaning').css("text-align", "center");
                        }


                }
            }
        }
                
              
        });
});


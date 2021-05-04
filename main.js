// CARGA DE IMAGENES
function ver(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
          document.getElementById("img").src = reader.result;
          const imagen=document.getElementById("img"); }}}
  
      const searchForm = document.querySelector("#voz");
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){
    console.log("Your Browwser supports speech Recognition");
    searchForm.insertAdjacentHTML("beforeend", '<button class="btn amy-crisp-gradient animation" type="button" ><i class="fas fa-microphone" ></i></button>');
    const micBtn = searchForm.querySelector("button");
    const micIcon = micBtn.querySelector("i");
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "es-MX"; 
    recognition.start(); 
    micBtn.addEventListener("click", micBtnClick);
    function micBtnClick(){

        if(micIcon.classList.contains("fa-microphone")) {
            recognition.start();}
        else{
            recognition.stop();}}
    
    recognition.addEventListener("start", startSpeechRecognition); 
    function startSpeechRecognition() {
        micIcon.classList.remove("fa-microphone");
        micIcon.classList.add("fa-microphone-slash");
        console.log("Speech Recognition Active");}

    recognition.addEventListener("end", endSpeechRecognition);
    function endSpeechRecognition() {
        micIcon.classList.remove("fa-microphone-slash");
        micIcon.classList.add("fa-microphone");
        
        console.log("Speech Recognition Disconnected");}
 
    recognition.addEventListener("result", resultOfSpeechRecognition);
    function resultOfSpeechRecognition() {
        const currentResultIndex = event.resultIndex;
        const transcript = event.results[currentResultIndex][0].transcript;

        if(transcript.toLowerCase().trim()==="ayuda del sitio"){
          window.open("ayuda.html","width=1000,height=500,scrollbars=YES")
        }
         
        if(transcript.toLowerCase().trim()==="abandonar") { 
          salida();
        }  

        //ANIMACION 1
        if (transcript.toLowerCase().trim() === "giro en uno") {
            var comando = just.animate({
                targets: ".ball",
                duration: 1524,
                props: {
                  innerHTML: ['TECNM', 'ITP'] 
                },
                web: {
                    rotateX: [24,1800]
                }
             });
        comando.play();
      }

      //ANIMACION 2
      if(transcript.toLowerCase().trim()==="aparecer"){
        var comando = just.animate({
            targets: ".ball",
            duration: 1524,
            
            web: {
                opacity: [0, 1]
            }
         });
        comando.play();
      }

        //ANIMACIÓN 3
        if (transcript.toLowerCase().trim() === "expandir") {
            var comando = just.animate({
                targets: ".ball",
                duration: 1500,
                web: {
                    opacity: [1, 0],
                   transform: [
                     { offset: 0, value: "scale(1, 1)" },
                       { offset: 0.3, value: "scale(1.25, .75, 1)" },
                       { offset: 0.4, value: "scale(.75, 1.25,1)" },
                       { offset: 0.5, value: "scale(1.15, .85,1)" },
                       { offset: 0.65, value: "scale(.95, 1.05,1)" },
                       { offset: 0.75, value: "scale(1.05, .95,1)" },
                       { offset: 1.0, value: "scale(2.22, 2.90)" },
                       { offset: 0, value: "scale(1, 1)" }
                   ],transform: [
                     { offset: 0, value: "scale(1, 1)" },
                       { offset: 0.3, value: "scale(1.25, .75, 1)" },
                       { offset: 0.4, value: "scale(.75, 1.25,1)" },
                       { offset: 0.5, value: "scale(1.15, .85,1)" },
                       { offset: 0.65, value: "scale(.95, 1.05,1)" },
                       { offset: 0.75, value: "scale(1.05, .95,1)" },
                       { offset: 1.0, value: "scale(2.22, 2.90)" },
                       { offset: 0, value: "scale(1, 1)" }
                   ]
                }
             })
            comando.play();
          }

        //ANIMACION 4
        if (transcript.toLowerCase().trim() === "cruz") {
            var comando = just.animate({
                targets: ".ball",
                duration: 2500,
      
                    web: {
                      transform: [
                          ['translatey(0px)','translatey(-200px)','translatey(0px)'],
                          ['translatex(0px)','translatex(200px)','translatex(0px)'],
                          ['translatey(0px)','translatey(200px)','translatey(0px)'],
                          ['translatex(0px)','translatex(-200px)','translatex(0px)']
                     ]
                      }
                    });
            comando.play();
          }

        //ANIMACION 5
        if (transcript.toLowerCase().trim() === "rebotar") {
            var comando = just.animate({
                targets: ".ball",
                duration: 500,
                web: {
                   transform: [
                     { offset: 0, value: "scale(1, 1)" },
                       { offset: 0.3, value: "scale(1.25, .75)" },
                       { offset: 0.4, value: "scale(.75, 1.25)" },
                       { offset: 0.5, value: "scale(1.15, .85)" },
                       { offset: 0.65, value: "scale(.95, 1.05)" },
                       { offset: 0.75, value: "scale(1.05, .95)" },
                       { offset: 1.0, value: "scale(2.22, 2.90)" },
                      {offset:1.1, value:"scale(1,1)"}
              
                   ]
                }
             });
             comando.play();
          }

         //ANIMACION 6
         if (transcript.toLowerCase().trim() === "deformar en uno") {
            var comando = just.animate({
                targets: ".ball",
                duration: 1000,
                web: {
                   transform: [
                      { offset: 1, value: "scale(1, 1)" },
                      { offset: 2, value: "scale(1, 1)" },
                      { offset: 1, value: "scale(.2, .20)" },
                      { offset: 2, value: "scale(.1, .30)" },
                      { offset: 1, value: "scale(.2, .40)" },
                      { offset: 2, value: "scale(.1, .50)" },
                      { offset: 1, value: "scale(.2, .60)" },
                      { offset: 2, value: "scale(.1, .70)" },
                      { offset: 1, value: "scale(.2, .80)" },
                      { offset: 2, value: "scale(.1, .90)" },
                      { offset: 2, value: "scale(1, 1 )" }
                   ]
                }
             });
          comando.play();
        }

      //ANIMACION 7 
      if (transcript.toLowerCase().trim() === "giro en dos") {
        var comando = just.animate({
            targets: ".ball",
            duration: 1524,
            web: {
                rotateY: [24,1800]
            }
         });

          comando.play();
        }  

      //ANIMACION 8
        if (transcript.toLowerCase().trim() === "deformar en dos") {
            var comando = just.animate({
                targets: ".ball",
                duration: 1400,
                web: {
                   transform: [
                      { offset: 0, value: "scale(1, 2,3)" },
                       { offset: 1, value: "scale(1, 2)" },
                       { offset: 1.11, value: "scale(1, 2)" },
                       { offset: 1.34, value: "scale(3, 2,1)" },
                     { offset: 0.3, value: "scale(1.25, .75)" }
                   ]
                }
             });
         comando.play();
        }

      //ANIMACION 9
        if (transcript.toLowerCase().trim() === "flash") {
            var comando = just.animate({
                targets: '.ball',
                duration: 500,
                web: {
                  opacity:[
                    {offset:.2,value:(1,.3)},
                    {offset:.5,value:(.3,.8)},
                    {offset:.7,value:(.8,.6)},
                    {offset:.9,value:(1,0)},
                    {offset:1,value:(.3,0)},
                    {offset:1.2,value:(.5,.9)},
                    {offset:1.5,value:(.2,.9)},
                    {offset:1.7,value:(1,.3)},
                    {offset:1.8,value:(.5,0)},
                    {offset:2,value:(0,1)},
                  ],
                }
              });
                   comando.play();}  
      //ANIMACION 10         
      if (transcript.toLowerCase().trim() === "borrar") {
        var comando = just.animate({
          targets: ".ball",
          duration: 5024, 
          web: {
             opacity: [1, 0],}
            });
       comando.play();
      }          
        console.log(event); }}
        else {
    console.log("Your Browser does not support speech Recognition");}

    var op=true;
    window.alert=salida;
    function salida(){
      var res;
      if (op=true){
        res=confirm('¿Desea salir del sitio?');
        if (res=true){
          window.close();}}
          else{
            return false;}}



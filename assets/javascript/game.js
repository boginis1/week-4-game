$(document).ready(function () {

  var magicNumber;
  var wins = 0;           
  var losses = 0; 
  var yourPick = 0;
  var crystalValue = Math.floor(Math.random() * 12) +1 
  var totalFromClicks = 0;
  var crystalImages = $("#section3");
  var crystals = ["diamond", "emerald", "ruby", "saphire"];
  var lockGame = false;
 	console.log(crystalValue);

    function startGame () {
               var totalFromClicks = 0;
               createCrystalImages();
               magicNumberGenerator();
               $(".crystal-img").click(playGame);
               $("#currentTally").text("Your current tally is:"+ (totalFromClicks));
               $("#results").text("");
    }
              


	 function magicNumberGenerator(){ //generate random number for the magic number
	// x = 19, y = 120
		magicNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
		console.log(magicNumber);
		$("#section2").text("Score: " + magicNumber);
	 }
	 // create crystal buttons
  
  
  	function createCrystalImages(){
  		 $(crystalImages).empty();

       //  add the crystal images and their attributes
  		//var img = $("<img/>") //document.createElement("img")
  		for (i=0; i< crystals.length; i++) {
  			var img = $("<img class='crystal-img'>");  // create image for every crystal
        var crystalValue = Math.floor(Math.random() * 12) +1 
      
  			img.attr("src", "assets/images/crystal" + i +".jpg");
        img.attr("id", crystals[i]);  //$("img").attr("id", names of the crystals);
        img.attr("data-crystalValue", crystalValue); //add the random number as crystalValue
        crystalImages.append(img);
        console.log(img);
       console.log("here" + crystalValue);
       var attValue = img.attr("data-crystalValue");
       console.log(attValue);
		  }
  	}

    //assign a number

	

magicNumberGenerator ();
createCrystalImages();

$(".crystal-img").click(playGame);
                $("#currentTally").text("Your current tally: " + (totalFromClicks));
  
  
// //check if the # added to the other numbers is equalto our magicNumber
  function playGame() {
     var crystalValue = parseInt($(this).attr("data-crystalValue")); 
      
     console.log("your pick: " + crystalValue);
          totalFromClicks += crystalValue;
        if (totalFromClicks < magicNumber){
              //$("#results").text("Keep going");
               
              $("#currentTally").text("Your current tally: " + (totalFromClicks));
              }
           // If the numbers did not match. You also let them know
          else if (totalFromClicks > magicNumber){
            $("#results").text("You lose, sorry.");
            ++losses
            $("#losses").text(losses);
            startGame();
          }
              else if (totalFromClicks === magicNumber) {
            $("#results").text("You Win!");
            ++wins;
            $("#wins").text(wins);
            startGame();
        }
              
  }
    
             
});

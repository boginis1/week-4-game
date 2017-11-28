$(document).ready(function () {

  var magicNumber;
  var winsCounter;           
  var lossesCounter;     
  var totalFromClicks;
  var newCrystalValue = [];
  var showTotalFromClicks = $("#currentTally");
  var crystalImages = $("#section3");
  var crystals = ["diamond", "emerald", "ruby", "saphire"];
 
 	console.log(crystalImages);

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
  			var img = $("<img/>");  // create image for every crystal
  			img.attr("data-crystalValue", crystalNumberGenerator()); 
  			//$("img").attr("id", crystals);
  			console.log("here" + crystalValue);
      	img.attr("src", "assets/images/crystal" + i +".jpg");
        img.attr("id", crystals.toString);
        
  			crystalImages.append(img);
       console.log(img);
		  }
  	}

	function crystalNumberGenerator(){  //generate random numbers for each crystal
	// x = 1, y = 12
		crystalValue = Math.floor(Math.random() * 12) + 1;
	}

magicNumberGenerator ();
crystalNumberGenerator();
createCrystalImages();


});

$("#section3").click(function(){
  
  var CrystalValue = parseInt($(this).attr("crystalValue"));
   console.log(crystalValue);
    // $("#currentTally") === crystalValueNew
    // if crystalValue != 0 {
    // $("#currentTally") === magicNumber
    // winsCounter + 1
    //   else if {
    //   $("#currentTally") >== magicNumber
    //   lossesCounter + 1
    //     else {
    //     $("#currentTally") = ($("#currentTally") + crystalValue)
    //     }
    //   }
  // }
});  

function startGame () {
     totalFromClicks = 0;
     showTotalFromClicks.html(totalFromClicks)
     createCrystalImages()
     magicNumber=0
 
 startGame();
 };
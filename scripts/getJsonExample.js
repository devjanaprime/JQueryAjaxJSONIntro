var currentIndex=0;
var theData;

$(document).ready( function(){
  console.log( 'in start' );
  $.ajax({
  url: 'http://devjana.net/support/records.json',
  dataType: 'json',
  success: function( data ){
    theData = data;
    displayStudent();
   }, // end success
  statusCode: {
    404: function(){
       alert( 'error connecting to server' );
    } // end 404
   } // end statusCode
  }); // end ajax  object

  $('#prevButton' ).click( function(){
    currentIndex--;
    // check if index is less than 0, if so go to lat record
    if( currentIndex < 0 ){
      currentIndex = theData.records.length - 1;
    }
    displayStudent();
  }); // end prevButton click

  $('#nextButton' ).click( function(){
    currentIndex++;
    // check if index is greater than or equal to length of array, if so go to first record
    if( currentIndex >= theData.records.length ){
      currentIndex = 0;
    }
    displayStudent();
  }); // end prevButton click

  var displayStudent = function(){
    // empty output before we append new info
    $("#outputDiv").empty();
    // format student info
    var nameOut = theData.records[ currentIndex ].first_field + " " + theData.records[ currentIndex ].last_field;
    // format record number
    var adjustedIndex = currentIndex +1;
    var counterOut = adjustedIndex + "/" + theData.records.length;
    /// - create element append - ///
    // format output
    var newHeader = document.createElement('h2');
    newHeader.textContent=nameOut;
    var newParagraph = document.createElement('p');
    newParagraph.textContent= counterOut;
    // display output
    $("#outputDiv").append( newHeader );
    $("#outputDiv").append( newParagraph );
  }; // end display student
}); // end doc ready

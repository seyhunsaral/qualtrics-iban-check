//   IBAN Checker for Qualtrics
//   Written by Ali Seyhun Saral 
//   CC BY-SA 4.0
//   IBAN Checksum Function `validateIbanCheckum(iban)` is adapted from https://stackoverflow.com/a/44657292 by LukStorms CC BY-SA 4.0

Qualtrics.SurveyEngine.addOnload(function()
{
    var invalidtext = "Invalid IBAN. Please check your entry";
    var validtext = "IBAN correct. Please click -> button to continue";
    
    this.disableNextButton();
    var surveypage = this;
    var defaultquestiontext = jQuery("#"+surveypage.questionId+" .QuestionText")[0].innerText;
    var invalidtextstyled = '<span style="color:red">' + invalidtext + '</span>';
    var validtextstyled = '<span style="color:green">' + validtext + '</span>';
    console.log(defaultquestiontext);
    
    function validateIbanChecksum(iban) {       
        // Adapted from https://stackoverflow.com/a/44657292 by LukStorms CC BY-SA 4.0
        const ibanStripped = iban.replace(/[^A-Z0-9]+/gi,'') //keep numbers and letters only
              .toUpperCase(); //calculation expects upper-case
        const m = ibanStripped.match(/^([A-Z]{2})([0-9]{2})([A-Z0-9]{9,30})$/);
        if(!m) return false;
        
        const numbericed = (m[3] + m[1] + m[2]).replace(/[A-Z]/g,function(ch){
            //replace upper-case characters by numbers 10 to 35
            return (ch.charCodeAt(0)-55); 
        });
        //The resulting number would be to long for javascript to handle without loosing precision.
        //So the trick is to chop the string up in smaller parts.
        const mod97 = numbericed.match(/\d{1,7}/g)
              .reduce(function(total, curr){ return Number(total + curr)%97},'');
        return (mod97 === 1);
    };
    
    this.questionclick = function(event,element){
        var ibanquestion = this;
        
        document.on("input", function(e) {
            
            if (validateIbanChecksum(ibanquestion.getChoiceAnswerValue()) == true) {
                console.log("valid iban");	
                surveypage.enableNextButton();
                jQuery("#"+surveypage.questionId+" .QuestionText").html(defaultquestiontext + " " + validtextstyled);
            }
            else {
                console.log("invalid iban");
                jQuery("#"+surveypage.questionId+" .QuestionText").html(defaultquestiontext + " " + invalidtextstyled);
                surveypage.disableNextButton();
            }
        })
    }	
   
});

Qualtrics.SurveyEngine.addOnReady(function()
{
  /*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
  /*Place your JavaScript here to run when the page is unloaded*/
});

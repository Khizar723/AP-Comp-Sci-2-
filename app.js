function getSelectValue(e) {
   selectedValue = parseInt(document.getElementById(e).value);
   
   if(Number.isNaN(selectedValue) || selectedValue == ""){
        selectedValue = 0;
   }
     return selectedValue;
 }


 function calculation(){
    const firstNational = getSelectValue('national1');
    const secondNational = getSelectValue('national2');

    const firstState = getSelectValue('state1');
    const secondState = getSelectValue('state2');

    const firstRegional = getSelectValue('regional1');
    const secondRegional = getSelectValue('regional2');

    const firstSchool = getSelectValue('school1');
    const secondSchool = getSelectValue('school2');
    const nationalAverage = ((firstNational+secondNational)/50);
     console.log(nationalAverage);

     const stateAverage = ((firstState+secondState)/40);
    console.log(stateAverage);

    const regionalAverage = ((firstRegional+secondRegional)/30);
    console.log(regionalAverage);

    const schoolAverage = ((firstSchool+secondSchool)/20);
    console.log(schoolAverage);

    const masterAverage = nationalAverage + stateAverage + regionalAverage + stateAverage;

    const gpa = getSelectValue('gpa');
    const sat = getSelectValue('sat');
    const act = getSelectValue('act');

    
    const Total = ((masterAverage + gpa + sat + act)/7)*100;

    console.log(Total);
    document.getElementById('result').innerHTML = Total.toFixed(2);

}

document.querySelector("#admissions-form").addEventListener("submit", function(e){
    e.preventDefault(); 

    calculation();
});





























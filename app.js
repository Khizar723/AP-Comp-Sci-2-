function getSelectValue(e) {
    selectedValue = parseInt(document.getElementById(e).value);

    if (Number.isNaN(selectedValue) || selectedValue == "") {
        selectedValue = 0;
    }
    return selectedValue;
}


function calculation() {
    const firstNational = getSelectValue('national1');
    const secondNational = getSelectValue('national2');

    const firstState = getSelectValue('state1');
    const secondState = getSelectValue('state2');

    const firstRegional = getSelectValue('regional1');
    const secondRegional = getSelectValue('regional2');

    const firstSchool = getSelectValue('school1');
    const secondSchool = getSelectValue('school2');
    const nationalAverage = (((firstNational + secondNational) * 2 ) * .25);
    //console.log(nationalAverage);

    const stateAverage = (((firstState + secondState) * 2.5 ) * .20);
    //console.log(stateAverage);

    const regionalAverage = (((firstRegional + secondRegional) * (100/30) ) * .15);
    //console.log(regionalAverage);

    const schoolAverage = (((firstSchool + secondSchool) * 5 ) * .10);
    //console.log(schoolAverage);

    const masterAverage = nationalAverage + stateAverage + regionalAverage + schoolAverage;

    const gpa = getSelectValue('gpa') * .10;
    const sat = (getSelectValue('sat') /16) * .10;
    const act = (getSelectValue('act') / 36 *100) * .10;


    const Total = ((masterAverage + gpa + sat + act) * .1) ;

    //console.log(Total);
    document.getElementById('result').innerHTML = Total.toFixed(2) + " %";

}

document.querySelector("#admissions-form").addEventListener("submit", function (e) {
    e.preventDefault();

    calculation();
});





























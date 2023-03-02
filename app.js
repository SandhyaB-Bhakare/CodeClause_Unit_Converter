console.log("Unit conversions");
let kilometerBtn=document.querySelector(".km");
let meterBtn=document.querySelector(".m");
let centimeterBtn=document.querySelector(".cm");
let millimeterBtn=document.querySelector(".mm");
let mminput=document.getElementById("mminp");
let cminput=document.getElementById("cminp");
let minput=document.getElementById("minp");
let kminput=document.getElementById("kminp");
let result=document.getElementById("result");

millimeterBtn.addEventListener("click",function() 
{
    let cmToMm=cminput.value*10;
    let mToMm=minput.value*100*10;
    let kmToMm=kminput.value*1000*100*10;
    let mmToMm=kminput.value;

    if(cminput.value) {
        result.value= `${cmToMm}mm`;
        minput.value="";
        kminput.value="";
        mminput.value="";

    }
    else if (minput.value) {
        result.value=`${mToMm}mm`;
        cminput.value="";
        kminput.value="";
        mminput.value="";

    }
    else if (kminput.value) {
        result.value=`${kmToMm}mm`;
        minput.value="";
        cminput.value="";
        mminput.value="";

    }
    else if (minput.value) {
        result.value=`${mmToMm}mm`;
        cminput.value="";
        kminput.value="";
        kminput.value="";

    }
});

centimeterBtn.addEventListener("click",function() 
{
    let mmToCm=mminput.value/10;
    let mToCm=minput.value*100;
    let kmToCm=kminput.value*1000*100;
    let cmToCm=kminput.value;

    if(mminput.value) {
        result.value=`${mmToCm}cm`;
        minput.value="";
        kminput.value="";
        cminput.value="";

    }
    else if (minput.value) {
        result.value=`${mToCm}cm`;
        mminput.value="";
        kminput.value="";
        cminput.value="";

    }
    else if (kminput.value) {
        result.value=`${kmToCm}cm`;
        minput.value="";
        mminput.value="";
        cminput.value="";

    }
    else if (minput.value) {
        result.value=`${cmToCm}cm`;
        minput.value="";
        mminput.value="";
        kminput.value="";

    }

});


meterBtn.addEventListener("click",function() 
{
    let mmToM=mminput.value/1000;
    let CmToM=cminput.value/100;
    let kmToM=kminput.value*1000;
    let mTOM=kminput.value;

    if(mminput.value) {
        result.value=`${mmToM}m`;
        minput.value="";
        kminput.value="";
        cminput.value="";

    }
    else if (cminput.value) {
        result.value=`${CmToM}m`;
        mminput.value="";
        kminput.value="";
        minput.value="";

    }
    else if (kminput.value) {
        result.value=`${kmToM}m`;
        cminput.value="";
        mminput.value="";
        minput.value="";

    }
    else if (minput.value) {
        result.value=`${mTOM}m`;
        cminput.value="";
        mminput.value="";
        kminput.value="";

    }
});

kilometerBtn.addEventListener("click",function() 
{
    let mmToKm=mminput.value/1000000;
    let CmToKm=cminput.value/100000;
    let mToKm=minput.value/1000;
    let kmTOKm=kminput.value;

    if(mminput.value) {
        result.value=`${mmToKm}Km` ;
        cminput.value="";
        minput.value="";
        kminput.value="";

    }
    else if (minput.value) {
        result.value=`${mToKm}Km`;
        mminput.value="";
        minput.value="";
        kminput.value="";

    }
    else if (cminput.value) {
        result.value=`${CmToKm}Km`;
        cminput.value="";
        mminput.value="";
        kminput.value="";

    }
    else if (minput.value) {
        result.value=`${mToKm}Km`;
        minput.value="";
        cminput.value="";
        mminput.value="";

    }
});






























































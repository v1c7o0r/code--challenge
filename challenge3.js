// a code for calculating the net salary taxation.
function taxableIncome(yearlyIncome){
    if (yearlyIncome <= 288000) {
        return (yearlyIncome/12)*(10/100)
    } else if(annualSalary-388000) {
        return 24000 +(yearlyIncome-28000)*(25/100)/12;
    }else if (yearlyIncome <= 6000000){
        return 32334 +(yearlyIncome -388000)*(30/100)/12;
    }else if (yearlyIncome <=9600000){
        return 500000 +(yearlyIncome -6000000)*(32.5/100)/12;
    }else{
        return 800000+ (yearlyIncome -9600000) * (35/100)/12;
    }
}
function calculatingNHIFDeduction(totalIncome){
    if (totalIncome<=5999) {
        return 150;
    }else if (totalIncome <= 7999){
        return 300;
    }else if (totalIncome <=11999){
        return 400;
    }else if (totalIncome <= 14999){
        return 500;
    }else if (totalIncome <=19999){
        return 600;
    }else if ( totalIncome <= 24999){
        return 750;
    }else if (totalIncome <=29999){
        return 850;
    }else if( totalIncome <= 34999){
        return 900;
    }else if (totalIncome <= 39999){
        return 950;
    }else if (totalIncome <= 44999){
        return 1000;
    }else if ( totalIncome <= 49999){
        return 1100;
     }else if ( totalIncome <= 59999){
        return 1200;   
      }else if (totalIncome <=69999){
        return 1300; 
    }else if ( totalIncome <= 79999){
        return  1400; 
     }else if ( totalIncome <= 89999){
        return 1500;
    }else if ( totalIncome <= 99999){
        return 1600
    }else {
        return 1700;
}
}
function NSSDeduction(pensionablePay){
    const upperLimitOne =7000;
    const lowerLimitTwo =36000;
    if (pensionablePay <=upperLimitOne){
        return pensionablePay *0.06;
    } else {
        return pensionablePay *0.06 +(pensionablePay -upperLimitOne)*0.015
    }
}
function taxableIncome(basicSalary,benefits){
    const yearlyIncome =(basicSalary + benefits)*12;
    const taxablePay = taxableIncome(yearlyIncome);
    const tax = taxablePay*(12/100);
    const NHIFDeduction = calculatingNHIFDeduction(basicSalary);
    const netContribution =NSSDeduction(basicSalary);

    const grossSalary=basicSalary+ benefits;
    const netSalary =grossSalary -tax -NHIFDeduction -NSSDeduction
    return netSalary; 
}
const basicSalary =20000;
const benefits =100;
const netSalary=calculateNetSalary(basicSalary,benefits);
console.log("Net Salary:" + netSalary +"KSH");
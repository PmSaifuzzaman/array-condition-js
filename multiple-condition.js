var isGraduated = true ;
var isSalary = 50000 ;
var inBank = 100000 ;
// Multiple condition (and)


// if (isGraduated === true && isSalary >= 50000 && inBank >= 100000){
//     console.log('M.sc confirm abroad')
// }
// else{
//     console.log('M.sc in IU')
// }






// Or
// if (isGraduated === true || isSalary >= 60000 || inBank >= 200000){
//     console.log('M.sc confirm abroad')
// }
// else{
//     console.log('M.sc in IU')
// }

// And or combine
// if ((isGraduated === true && isSalary >= 60000) || inBank >= 200000){
//     console.log('M.sc confirm abroad')
// }
// else{
//     console.log('M.sc in IU')
// }


if ((isGraduated === true && isSalary >= 50000) || inBank >= 200000){
    console.log('M.sc confirm abroad')
}
else{
    console.log('M.sc in IU')
}
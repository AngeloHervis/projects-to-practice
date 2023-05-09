let number = prompt("Escolha o valor em metros que será convertido:")
let choose = prompt("Escolha para qual medida ele será convertido (mm, cm, dm, dam, hm, km.")

switch (choose) {
    case "mm":
        alert(number + "m convertido para milímetros fica " + number*1000 +"mm" )
        break
    case "cm":
        alert(number + "m convertido para centímetros fica " + number*100 +"cm" )
        break
    case "dm":
        alert(number + "m convertido para decímetros fica " + number*10 +"dm" )
        break
    case "dam":
        alert(number + "m convertido para decâmetros fica " + number/10 +"dam" )
        break
    case "hm":
        alert(number + "m convertido para hectômetros fica " + number/100 +"hm" )
        break
    case "km":
        alert(number + "m convertido para quilômetros fica " + number/1000 +"km" )
        break
    default:
        alert("Opção inválida!!")
        break
}

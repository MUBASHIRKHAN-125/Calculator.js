function Positive()
{
let Sum = Number (document.getElementById("Sum").value)
let Minus = Number (document.getElementById("Minus").value)
document.getElementById("containernumber").innerText = Sum + Minus;
}
function Negative()
{
let Sum = Number (document.getElementById("Sum").value)
let Minus = Number (document.getElementById("Minus").value)
document.getElementById("containernumber").innerText = Sum - Minus;
}
function Multiply()
{
let Sum = Number (document.getElementById("Sum").value)
let Minus = Number (document.getElementById("Minus").value)
document.getElementById("containernumber").innerText = Sum * Minus;
}
function Divide()
{
let Sum = Number (document.getElementById("Sum").value)
let Minus = Number (document.getElementById("Minus").value)
document.getElementById("containernumber").innerText = Sum / Minus;
}
function reset()
{
         (document.getElementById("Sum").value) = " ";
        (document.getElementById("Minus").value) = " ";
        document.getElementById("containernumber").innerText = " ";
}
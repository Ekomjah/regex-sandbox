const regexPattern = document.getElementById("pattern")
const stringToTest = document.getElementById("test-string")
const testButton = document.getElementById("test-btn")
const testResult = document.getElementById("result")
const globalFlag = document.getElementById("g")
const caseInsensitiveFlag = document.getElementById("i")
const gLabel = document.querySelector(".g-label")
const iLabel = document.querySelector(".i-label")
 const spanText = document.createElement("span")
 stringToTest.appendChild(spanText)

function getFlags(){
  let value = ""
  if(globalFlag.checked == true) {
    value += `g`}
  if(caseInsensitiveFlag.checked == true) {
     value += `i`
  }
    return value
}

testButton.addEventListener("click", ()=>{
  spanText.textContent = ""
 let pattern = regexPattern.value
 let escapedValue = getFlags()
 let newPattern = new RegExp(pattern, escapedValue)
 let originalValue = stringToTest.textContent
 
  if(newPattern.test(stringToTest.textContent)) {
    let match = stringToTest.textContent.match(newPattern).join(", ")
    console.log(match)
    const highlighted = originalValue.replace(newPattern, (event)=>{
      return `<span class = "highlight">${event}</span>`})
    testResult.innerText = `${match}`
    stringToTest.innerHTML = highlighted
  }
  else{
    testResult.textContent = `no match`
  }
  console.log(spanText.textContent)
})


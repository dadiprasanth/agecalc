const date=document.getElementById("date")
const month=document.getElementById("month")
const year=document.getElementById("year")
const btn=document.getElementById("but")
const result=document.getElementById("result")
const fun=(e)=>{
  e.preventDefault()

  let err=[]
  if(date.value==""||parseInt(date.value)>31||isNaN(date.value)){
 
    err.push("date field")
  }
  if(month.value==""||parseInt(month.value)>12||isNaN(month.value)){
    err.push("month field")
  }
  console.log(year.value)
  if(year.value==""||isNaN(year.value)||year.value<1000){
    err.push("year field")
  }
  console.log(err)
  if(err.length>=1){
    let s="Please enter valid date for"
    for(let i of err){
      s=s+","+i
    }result.innerText=s
  }else{
    const date1=new Date()
    let date2=date1.getDate();
    let month2=date1.getMonth()+1;
    let year2=date1.getFullYear();
    let months=[31,28,31,30,31,30,31,31,30,31,30,31]
    if(parseInt(date.value)>date2){
      date2=date2+months[month2-1]
      month2=month2-1
    }if(parseInt(month.value)>month2){
      month2=month2+12
      year2=year2-1
    }
    let d=date2-date.value
    let m=month2-month.value
    let y=year2-year.value
    s=`YOUR AGE IS ${y} YEARS ${m} MONTHS ${d} DAYS`
    result.innerText=s
  }
}
date.addEventListener("keyup",()=>{
  if(date.value.length>=2){
    date.value=date.value.slice(0,2)
  }
})
month.addEventListener("keyup",()=>{
  if(month.value.length>=2){
    month.value=month.value.slice(0,2)
  }
})
year.addEventListener("keyup",()=>{
  if(year.value.length>=4){
    year.value=year.value.slice(0,4)
  }
})
btn.addEventListener("click",fun)
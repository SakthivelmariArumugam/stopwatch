let startb=document.getElementById('start');
let stopb=document.getElementById('stop');
let resetb=document.getElementById('Reset');
let hour = 0;
let min = 0;
let sec = 0;
let cou = 0;
startb.addEventListener('click',function()
{
   timer=true;
   stopWatch();
});
stopb.addEventListener('click',function()
{
   timer=false
});
resetb.addEventListener('click',function()
{
   timer=false;
   hour = 0;
   min = 0;
   sec = 0;
   cou = 0;
   document.getElementById('hr').innerHTML="00";
   document.getElementById('min').innerHTML="00";
   document.getElementById('sec').innerHTML="00";
   document.getElementById('cou').innerHTML="00";
});
function stopWatch()
{
    if(timer)
    {
        cou++;
        if(cou==100)
        {
            sec++;
            cou=0;
        }
        if(sec==60)
        {
           min++;
           sec=0;
        }
        if(min==60)
        {
            hour++;
            min=0;
            sec=0;
        }
        let hrString=hour;
        let minString=min;
        let secString=sec;
        let countString=cou;
        if(hour<10)
        {
            hrString="0"+hrString;
        }
        if(min<10)
        {
            minString="0"+minString;
        }
        if(sec<10)
        {
            minString="0"+secString;
        }
        if(cou<10)
        {
            countString="0"+countString;
        }
        document.getElementById('hr').innerHTML=hrString;
        document.getElementById('min').innerHTML=minString;
        document.getElementById('sec').innerHTML=secString;
        document.getElementById('cou').innerHTML=countString;
        setTimeout(stopWatch,10);
    }
}

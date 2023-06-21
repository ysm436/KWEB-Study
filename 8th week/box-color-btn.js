function changeBoxColor()
{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    
    document.getElementsByClassName("box")[1].style.backgroundColor = "rgb("+r+","+g+","+b+")";
};
function setRandomBgColor()
{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    
    document.getElementById("color-box").style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

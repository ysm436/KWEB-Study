function displayTimes()
{
    const n = document.getElementById("number").value;
    const parsed_n = parseInt(n);

    if(!isNaN(parsed_n)&&n==parsed_n&&parsed_n >=1&&parsed_n <=9)
    {
        result = "";
        for(let i = 1; i <= 9; i++)
        {
            result += parsed_n + "x" + i + "=" + parsed_n*i + "\n";
        }
        document.getElementById("times-result").innerText = result;
    }
    else
    {
        document.getElementById("times-result").innerText = "Input Error!";
    }
}

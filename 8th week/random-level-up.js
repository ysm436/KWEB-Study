
const chanceArr = [100,60,36,22,13,8,5,3,2,1]
let trys = 0;
let level = 0;

function getRandomBinaryResult(chance)
{
    return (chance > Math.floor(Math.random() * 100));
};
    
function tryLevelUp()
{
    const loopId = setInterval(() => {
        trys++;
        document.getElementById('attempts').innerText = trys;

        if (getRandomBinaryResult(chanceArr[level]))
        {
            level++;
            document.getElementById('gauge-bar').style.width = level * 10 + '%';
            document.getElementById('current-level').innerText = level;
        }

        if (level >= 10)
        {
            clearInterval(loopId);
        }

    }, 50);
};  

function Work()
{
    tryLevelUp();
}
const goal = {
    row: 1,
    col: 7
}
const cur_pos = {
    row: 5,
    col: 0
}
const row_min = 0, row_max = 6;
const col_min = 0, col_max = 7;

function getElementByPosition(pos)
{
    return document.getElementsByClassName("cells")[pos.row].getElementsByClassName("cell")[pos.col];
}

function getNewPositionByKey(key_input)
{
    const tmp_pos = {
        row: cur_pos.row,
        col: cur_pos.col
    }
    switch(key_input)
    {
        case "ArrowUp":
            tmp_pos.row--;
            break;
        case "ArrowDown":
            tmp_pos.row++;
            break;
        case "ArrowLeft":
            tmp_pos.col--;
            break;
        case "ArrowRight":
            tmp_pos.col++;
            break;
    }
    return tmp_pos;
}

function isPositionInRange(pos)
{
    if(pos.row < row_min || pos.row > row_max || pos.col < col_min || pos.col > col_max)
        return false;
    return true;
}

function isPositionWall(pos)
{
    return getElementByPosition(pos).classList.contains("wall");
}

document.addEventListener("keydown", event => {
    getElementByPosition(cur_pos).classList.remove("current");
    const new_pos = getNewPositionByKey(event.code);

    if (isPositionInRange(new_pos) && !isPositionWall(new_pos)) {
        cur_pos.row = new_pos.row;
        cur_pos.col = new_pos.col;
    }

    const newPosElement = getElementByPosition(cur_pos);
    newPosElement.classList.add("current");
    if (newPosElement.classList.contains("target"))
    setTimeout("alert('You escaped!');", 0.01);
});
    
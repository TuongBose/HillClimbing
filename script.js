function generateLandscape() {
    const rows = 10;
    const cols = 10;
    const landscape = Array.from({ length: rows }, () => Array.from({ length: cols }, () => Math.floor(Math.random() * 50) + 1));
    return landscape;
}

function displayLandscape(landscape) {
    const landscapeDiv = document.getElementById('landscape');
    landscapeDiv.innerHTML = '<h2>Landscape:</h2>';
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    for (let row of landscape) {
        const tr = document.createElement('tr');
        for (let value of row) {
            const td = document.createElement('td');
            td.textContent = value;
            td.style.border = '1px solid black';
            td.style.padding = '5px';
            td.style.textAlign = 'center';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    landscapeDiv.appendChild(table);
}

function findNeighbours(state, landscape) {
    const neighbours = [];
    const [x, y] = state;
    const rows = landscape.length;
    const cols = landscape[0].length;

    // left neighbour
    if (x > 0) neighbours.push([x - 1, y]);

    // right neighbour
    if (x < rows - 1) neighbours.push([x + 1, y]);

    // top neighbour
    if (y > 0) neighbours.push([x, y - 1]);

    // bottom neighbour
    if (y < cols - 1) neighbours.push([x, y + 1]);

    // top left
    if (x > 0 && y > 0) neighbours.push([x - 1, y - 1]);

    // bottom left
    if (x > 0 && y < cols - 1) neighbours.push([x - 1, y + 1]);

    // top right
    if (x < rows - 1 && y > 0) neighbours.push([x + 1, y - 1]);

    // bottom right
    if (x < rows - 1 && y < cols - 1) neighbours.push([x + 1, y + 1]);

    return neighbours;
}

function hillClimb(currState, landscape) {
    const neighbours = findNeighbours(currState, landscape);
    let nextState = currState;
    let ascended = false;

    for (let neighbour of neighbours) {
        const [nx, ny] = neighbour;
        if (landscape[nx][ny] > landscape[nextState[0]][nextState[1]]) {
            nextState = neighbour;
            ascended = true;
        }
    }

    return [ascended, nextState];
}

function runHillClimbing() {
    const landscape = generateLandscape();
    displayLandscape(landscape);
    
    let currentState = [3, 6]; // Starting point
    let count = 1;
    let ascending = true;

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = '';

    while (ascending) {
        messageDiv.innerHTML += `<p><strong>Bước #${count}</strong></p>`;
        messageDiv.innerHTML += `<p>Tọa độ trạng thái hiện tại: ${currentState}</p>`;
        messageDiv.innerHTML += `<p>Giá trị trạng thái hiện tại: ${landscape[currentState[0]][currentState[1]]}</p>`;
        count++;

        [ascending, currentState] = hillClimb(currentState, landscape);

        if (!ascending) {
            break;
        }
    }

    messageDiv.innerHTML += `<p><strong>Bước #${count}</strong></p>`;
    messageDiv.innerHTML += `<p>Đã đạt được mục tiêu.</p>`;
    messageDiv.innerHTML += `<p>Tọa độ trạng thái cuối cùng: ${currentState}</p>`;
    messageDiv.innerHTML += `<p>Giá trị trạng thái cuối cùng: ${landscape[currentState[0]][currentState[1]]}</p>`;
}
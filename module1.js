
function multiply(...numbers) {

    return numbers.reduce((product, number) => product * number, 1);
}


export default multiply;

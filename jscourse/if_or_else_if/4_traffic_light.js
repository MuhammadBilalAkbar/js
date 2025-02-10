/*Traffic Light Simulation*/
function trafficLight(color) {
    color = color.toLowerCase();
    if (color === 'green') console.log('Go!');
    else if (color === 'yellow') console.log('Slow down!');
    else if (color === 'red') console.log('Stop!');
    else console.log("Invalid color. Please use 'green', 'yellow', or 'red'.");
}
trafficLight("Green");
trafficLight("yellow");
trafficLight("RED");
trafficLight("blue");

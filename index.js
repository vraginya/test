class shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

function calculateArea(shapeItem) {
    let area = shapeItem.width * shapeItem.height;

    return area;
}

function calculatePerimeter(shapeItem) {
    let perimeter = (shapeItem.width + shapeItem.height) * 2;
    return perimeter;
}

function determineShapeType(shapeItem) {
    if (shapeItem.width === shapeItem.height) {
    shapetype = 'square';
    } else {
    shapetype = 'rectangle';
    }
    return shapetype;
}

let shapes = [
    new shape(100, 100, "red"),
    new shape(200, 100, "blue"),
    new shape(100, 300, "green"),
];

shapes.forEach(function (shapeItem, index) {
    let area = calculateArea(shapeItem);
   
    let shapetype = determineShapeType(shapeItem);

    let perimeter = calculatePerimeter(shapeItem);
   
    result = 'The shape area is: ' + area;

    result += '\n';
    
    result += 'The shape perimeter is: ' + perimeter;

    result += '\n';

    result += 'The shape color is: ' + shapeItem.color;

    result += '\n';

    result += 'The shape shapetype is: ' + shapetype;

    // TODO: Update the result to show the shape type and perimeter

    console.log('Shape ' + (index + 1));
    console.log(result);
});
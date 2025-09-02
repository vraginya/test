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
    // TODO: Implement the function to calculate the shape perimeter
    return 'to be implemented';
}

function determineShapeType(shapeItem) {
    //TODO: Implement the function to determine the shape type (square or rectangle)
    // Hint: The function should return "square" if the width and height are equal, and "rectangle" otherwise.
    return 'to be implemented';
}

let shapes = [
    new shape(100, 100, "red"),
    new shape(200, 100, "blue"),
    new shape(100, 300, "green"),
];

shapes.forEach(function (shapeItem, index) {
    let area = calculateArea(shapeItem);

    let result = 'The shape area is: ' + area;

    result += '\n';
    result += 'The shape color is: ' + shapeItem.color;

    result += '\n';

    // TODO: Update the result to show the shape type and perimeter

    console.log('Shape ' + (index + 1));
    console.log(result);
});
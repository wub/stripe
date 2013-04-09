/*
    STRIPE

    stripe('body', 1000, 20, 'rgb(20, 30, 40)', ['aaa','bbb','ccc']);
 */

function stripe(element, width, height, colour, palette)
{
    "use strict";

    var iterator,
        target  = document.querySelector(element),
        canvas  = document.createElement("canvas"),
        context = canvas.getContext("2d"),
        width   = width   || 1000,
        height  = height  || 5,
        colour  = colour  || '#666',
        colours = palette || [
            '467F71', 'D3F263', '3E8C84',
            '296B73', 'E52738', 'FEE63F',
            '3BD2CC', '2BA6E8', 'B4D455'
        ];

    canvas.width = width;
    canvas.height = height;

    for (iterator = 0; iterator < canvas.width; iterator += 1)
    {
        // much nicer results with random in here
        var random = Math.floor(Math.random() * 50);

        // grab random colour. shove it in.
        context.fillStyle = "#" + colours[Math.floor(Math.random() * colours.length)];
        context.fillRect((iterator * random), 0, (50 * random), height);
    }
    // let's lather her up
    target.style.background = colour + " url(" + canvas.toDataURL("image/png") + ") repeat-x";
}

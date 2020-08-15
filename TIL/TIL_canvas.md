1. The grid
   - Canvas has its own coordinate space starting from topLeft
   - You can move the coordinate origin 


2. Drawing Rectangles
   - Unlike SVG, canvas only supports two primitive shapes: rectangle and path
   - fillrect(x, y, width, height) draws a filled rectangle
   - strokeRect(x, y, width, height) draws a rectangular outline
   - clearRect(x, y, width, height) clears the specified rectangular area, making it fully transparent

3. Drawing Paths
   - Create Path > Use drawing commands to draw into that path > Once path has been created, stroke or fill the path to render it
   - beginPath() creates new path
   - moveTo(x, y) moves the pen to the coordinates specified by x and y
   - lineTo(x, y) creates line from moveTo's (x, y) coordinates
   - arc(x, y, radius, startAngle, endAngle, anticlockwise) draws an arc which is center at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by anticlockwise
   - closePath() adds a straight line to path, going to the start of current sub-path
   - stroke() draws the shape by stroking its outline
   - fill() draws a solid shape by filling the path's content area(must need fill() to draw lines)


Else there are more advanced concepts such as bezierCurveTo(), roundedRect(), quadraticCurveTo().... 

But due to lack of time, I'll leave the link to MDN.

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Arcs


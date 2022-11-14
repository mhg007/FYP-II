$(document).ready(() => {
    var myCanvas = new fabric.Canvas('memeCanvas', {
        width: 1100,
        height: 700,
        backgroundColor: "white"
    });

    myCanvas.on({
        'selection:updated': ()=>{
            console.log("Updated")
        },
        'selected:created': ()=>{
            console.log("Created")
        }
    })

    $('#typography_add_btn').click(() => {
        var itext = new fabric.IText('Hello World', {
            left: 100,
            top: 150,
            fontSize: 20,
            fontFamily: "Arial"
        });
        myCanvas.add(itext);
    });
    $('#typography_color').change(() => {
        let color = $('#typography_color').val();
        var selectedObject = myCanvas.getActiveObject();
        selectedObject.set({ fill: color })
        myCanvas.renderAll()
    });
    $('#typography_size').change(() => {
        let size = $('#typography_size').val();
        var selectedObject = myCanvas.getActiveObject();
        selectedObject.fontSize = size;
        myCanvas.renderAll()
    });
    $('#typography_fontfamily').change(() => {
        let font_family = $('#typography_fontfamily').val()
        var selectedObject = myCanvas.getActiveObject();
        selectedObject.set({ fontFamily: font_family })
        myCanvas.renderAll()
    });
    $('#typography_fontstyle').change(() => {
        let font_style = $('#typography_fontstyle').val();
        var selectedObject = myCanvas.getActiveObject();
        selectedObject.set({ fontStyle: font_style })
        myCanvas.renderAll()
    });
    $('#typography_fontweight').change(() => {
        let font_weight = $('#typography_fontweight').val();
        var selectedObject = myCanvas.getActiveObject();
        selectedObject.set({ fontWeight: font_weight });
        myCanvas.renderAll();
    });
    $('#export_png').click(function () {
        $(this).attr('href', myCanvas.toDataURL({ format: "png", quality: '1' }));
        $(this).attr('download', "meme.png");
    });
    $('#export_jpeg').click(function () {
        $(this).attr('href', myCanvas.toDataURL({ format: "jpeg", quality: '1' }));
        $(this).attr('download', "meme.jpeg");
    });

    $('#shape_add_btn').click(() => {
        let shape = $('#shapes_add_shape').val();
        switch (shape) {
            case "circle":
                var myCircle = new fabric.Circle({
                    radius: 50,
                    left: 400,
                    top: 300,
                    stroke: 'black',
                    strokeWidth: 1,
                    fill: 'rgba(0,0,0,0)'
                });
                myCanvas.add(myCircle);
                break;
            case "ellipse":
                var myEllipse = new fabric.Ellipse({
                    rx: 80,
                    ry: 40,
                    radius: 50,
                    stroke: 'black',
                    strokeWidth: 1,
                    fill: 'rgba(0,0,0,0)'
                });
                myCanvas.add(myEllipse)
                break;
            case "line":
                var myLine = new fabric.Line([500, 200, 200, 150], { stroke: "black" });
                myCanvas.add(myLine)
                break;
            case "rectangle":
                var myRectangle = new fabric.Rect({
                    left: 150,
                    top: 150,
                    width: 100,
                    height: 100,
                    stroke: 'black',
                    strokeWidth: 1,
                    fill: 'rgba(0,0,0,0)'
                });
                myCanvas.add(myRectangle)
                break;
            default:
                break;
        }
    });
    $('#shape_fill_color').change(() => {
        let color = $('#shape_fill_color').val();
        var selectedObject = myCanvas.getActiveObject();
        console.log(selectedObject)
        selectedObject.set({ fill: color })
        myCanvas.renderAll()
    });

    $('#upload_image').change(function (e) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function () {
                var img = new fabric.Image(image);
                img.set({
                    left: 100,
                    top: 60
                });
                img.scaleToWidth(200);
                myCanvas.add(img).setActiveObject(img).renderAll();
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    })

});



inputElement = document.getElementById('pdf-file')
inputElement.onchange = function (event) {

    var file = event.target.files[0];

    //Step 2: Read the file using file reader
    var fileReader = new FileReader();

    fileReader.onload = function () {

        //Step 4:turn array buffer into typed array
        var typedarray = new Uint8Array(this.result);

        //Step 5:pdfjs should be able to read this
        const loadingTask = pdfjsLib.getDocument(typedarray);
        loadingTask.promise.then(pdf => {
            // The document is loaded here...
        });


    };
    //Step 3:Read the file as ArrayBuffer
    fileReader.readAsArrayBuffer(file);
}

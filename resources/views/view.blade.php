<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Invite</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
       <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
       <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
       <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
        <link href="https://cdn.jsdelivr.net/npm/@morioh/v-quill-editor/dist/editor.css" rel="stylesheet">
        <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">
    </head>
    <body class="antialiased">
      
        <div>
            <input id="image-input" type="file" accept=".jpg,.png,.jpeg,.jfif">
            <div>
                <img id="input-preview" alt="This is the preview of the image you are going to upload."/>
            </div>
            <div>
                <img id="output-preview" alt="This is the compressed result of the image you will upload."/>  
            </div>
        </div>

        
    </body>
    <script>
        function getImageDimensions(image){
            return new Promise((resolve, reject) => {
                image.onload = function(e){
                    const width = this.width;
                    const height = this.height;
                    resolve({height, width});
                }
            });
        }


        function compressImage(image, scale, initalWidth, initalHeight){
            return new Promise((resolve, reject) => {
                const canvas = document.createElement("canvas");

                canvas.width = scale * initalWidth;
                canvas.height = scale * initalHeight;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                
                ctx.canvas.toBlob((blob) => {
                    resolve(blob);
                }, "image/png"); 
            }); 
        }

        const imageInput = document.getElementById("image-input");
        imageInput.addEventListener("change", async (ev) => {
            const uploadedImage = imageInput.files[0];
            if(!uploadedImage){ // if no file is uploaded, no need to do anything
                return;
            }

            //preview the inputted image
            const inputPreview = document.getElementById("input-preview"); 
            inputPreview.src = URL.createObjectURL(uploadedImage);
            
            console.log(inputPreview);
            //get the dimensions of the input image
            const {height, width} = await getImageDimensions(inputPreview); 

            const MAX_WIDTH = 200; //if we resize by width, this is the max width of compressed image
            const MAX_HEIGHT = 200; //if we resize by height, this is the max height of the compressed image

            const widthRatioBlob = await compressImage(inputPreview, MAX_WIDTH / width, width, height); 
            const heightRatioBlob = await compressImage(inputPreview, MAX_HEIGHT / height, width, height);
        
            //pick the smaller blob between both
            const compressedBlob = widthRatioBlob.size > heightRatioBlob.size ? heightRatioBlob : widthRatioBlob;
            
            // preview the compressed blob
            const outputPreview = document.getElementById("output-preview");
            outputPreview.src = URL.createObjectURL(compressedBlob);

            /*in some cases, the initial uploaded image maybe smaller than our compressed result. 
            if that is the case, reuse the uploaded image. */
            const myFile = new File([outputPreview.src], "profile.jpeg", {
                type: "image/jpeg",
                });


            const optimalBlob = compressedBlob.size < uploadedImage.size ? compressedBlob : uploadedImage; 
            console.log(`Inital Size: ${uploadedImage.size}. Compressed Size: ${optimalBlob.size}`);
            
            URL.revokeObjectURL(inputPreview);
            URL.revokeObjectURL(outputPreview);
            let testurl = URL.revokeObjectURL(outputPreview);
        });

        

    </script>
</html>

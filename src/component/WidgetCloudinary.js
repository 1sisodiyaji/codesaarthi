import React, { useEffect } from 'react';

const WidgetCloudinary = ({ cloudName, uploadPreset, onSuccess }) => {
  useEffect(() => { 
    const script = document.createElement('script');
    script.src = 'https://upload-widget.cloudinary.com/latest/global/all.js';
    script.async = true;
    script.onload = () => {
      window.cloudinary.setCloudName(cloudName);
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: uploadPreset,
          cropping: true,
          multiple: false, 
           
        },
        (error, result) => {
          if (!error && result && result.event === "success") { 
            if (onSuccess) onSuccess(result.info);
          }
        }
      );

      document.getElementById('upload_widget_opener').addEventListener(
        'click',
        function () {
          widget.open();
        },
        false
      );
    };
    document.body.appendChild(script);
  }, [cloudName, uploadPreset, onSuccess]);

  return (
    <button id="upload_widget_opener" className="cloudinary-button">
      Upload Image
    </button>
  );
};

export default WidgetCloudinary;

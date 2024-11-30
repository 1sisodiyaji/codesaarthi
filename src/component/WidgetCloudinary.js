import React, { useEffect } from 'react';

const WidgetCloudinary = ({ cloudName, uploadPreset, onSuccess, onFailure }) => {
  useEffect(() => {
    // Load Cloudinary's upload widget script
    const script = document.createElement('script');
    script.src = 'https://upload-widget.cloudinary.com/latest/global/all.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize the upload widget
      window.cloudinary.setCloudName(cloudName);

      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: uploadPreset,
          sources: ['local', 'url', 'camera', 'dropbox', 'google_drive', 'image_search'],
          showSkipCropButton: true,
          cropping: true,
          croppingAspectRatio: 1,
          croppingDefaultSelectionRatio: 0.8,
          croppingShowDimensions: true,
          croppingCoordinatesMode: 'custom',
          multiple: false,
          defaultSource: 'local',
          maxFiles: 1,
          theme: 'minimal',
          language: 'en',
        },
        (error, result) => {
          if (error) {
            onFailure && onFailure(error);
          } else if (result.event === 'success') {
            onSuccess && onSuccess(result.info);
          } else if (result.event === 'open') {
            // Disable scroll when the widget is open
            document.body.style.overflowY = 'hidden';
          } else if (result.event === 'close') {
            // Re-enable scroll when the widget is closed
            document.body.style.overflowY = 'auto';
          }
        }
      );

      document.getElementById('upload_widget_opener').addEventListener('click', () => {
        widget.open();
      });
    };

    return () => {
      document.body.removeChild(script);
      // Ensure scroll is enabled when the component is unmounted
      document.body.style.overflowY = 'auto';
    };
  }, [cloudName, uploadPreset, onSuccess, onFailure]);

  return (
    <button id="upload_widget_opener" type="button" className='btn text-capitalize'>
      Upload Image <i className="fi fi-sr-cloud-upload-alt"></i>
    </button>
  );
};

export default WidgetCloudinary;

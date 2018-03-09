# Image_Cropper
React Application to crop Image using React-DropZone and React-Avatar-Editor.

## Components

* **EditorPreview** : Contains the Avatar Editor and its functions.
* **ImageSettings** : Contains the inputs to handle width, height and Scale, other input can also be added like rotation and border radius.
* **RangeInput** : Returns a input of type range with label.
* **Notification** : Displays Notification at the bottom.
* **CroppedPreview** : Contains the preview of the cropped Image and Print button which opens a New Tab and prints the image.
* **InputImage** : Contains the DropZone component and wraps all other components.

### Important Functions

* **handleEditorPreview** : It is called from `ImageSettings` to display the Editor.
* **handleSavedImage** : It is called from `EditorPreview` to save the _URL_ of the Cropped Image.

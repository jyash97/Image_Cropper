import React from 'react';
import AvatarEditor from 'react-avatar-editor';

class EditorPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      image: false
    };
    this.onClickSave = this.onClickSave.bind(this);
    this.setEditorRef = this.setEditorRef.bind(this);
  }

  async onClickSave() {
    if (this.editor) {
      const canvasScaled = this.editor.getImageScaledToCanvas().toDataURL();
      let imageURL;
      await fetch(canvasScaled)
        .then(res => res.blob())
        .then(blob => (imageURL = window.URL.createObjectURL(blob)));

      this.setState({
        url: imageURL
      });
      this.props.handleSavedImage(Promise.resolve(imageURL));
    }
  }

  setEditorRef(editor) {
    this.editor = editor;
  }

  render() {
    return (
      <div className="image-container">
        <h4>Image Editor</h4>
        <AvatarEditor
          ref={this.setEditorRef}
          image={this.props.image}
          width={this.props.dimensions.width}
          height={this.props.dimensions.height}
          border={50}
          borderRadius={0}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={this.props.dimensions.scale}
          rotate={0}
        />
        <div>
          <button onClick={this.onClickSave}>Save Image</button>
        </div>
      </div>
    );
  }
}

export default EditorPreview;

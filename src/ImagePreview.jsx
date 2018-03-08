import React from 'react';
import AvatarEditor from 'react-avatar-editor';

const ImagePreview = props => (
  <div className='image-container'>
    <AvatarEditor
      image={props.image}
      width={props.dimensions.width}
      height={props.dimensions.height}
      border={50}
      borderRadius={props.dimensions.borderRadius}
      color={[255, 255, 255, 0.6]} // RGBA
      scale={props.dimensions.scale}
      rotate={0}
    />
  </div>
);

export default ImagePreview;

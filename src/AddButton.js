import React from 'react';

export default function AddButton(props) {
  const {tag, className, children, ...otherProps} = props;

  return (
    props.tag,
    {
      className:['add-button', props.className].join(' '),
      ...otherProps

    },
    props.children
  );
}
AddButton.defaultProps= {
  tag: 'a'
}
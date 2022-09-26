import * as React from 'react';
import { createElement } from 'react';
// import { Input } from '@alifd/next';
// import { bizCssPrefix } from '../../variables';
import './index.scss';

export interface ColorfulTextProps {
  color?: 'string';
  size?: 'number';
  style?: React.CSSProperties,
  [x: string]: any
}

const ColorfulText: React.FC<ColorfulTextProps> = function ColorfulInput({
  color,
  size,
  style = {},
  ...otherProps
}) {
  const _style = style || {};
  if (color) {
    _style.backgroundColor = color;
  }
  const _otherProps = otherProps || {};
  _otherProps.style = _style;
  return (
    <div {..._otherProps} >
      <h2>
        helloworld{size}
      </h2>
      <h5>
        helloworld{size}
      </h5>
    </div>
  );
};

export default ColorfulText;

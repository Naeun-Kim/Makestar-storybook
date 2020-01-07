import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered";
import ProgressBar from './ProgressBar';

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const sizeLabel = 'Sizes';
    const percentLabel = 'Percent';
    const sizes = {
      MD: 'md',
      SM: 'sm'
    }
    const percent = {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }
    const defaultSize = 'sm';
    const defaultPercent = 50;
    const sizeValue = select(sizeLabel, sizes, defaultSize);
    const percentValue = number(percentLabel, defaultPercent, percent);
    return (
      <ProgressBar percent={percentValue} size={sizeValue} />
    )
  })
  .add('limited', () => <ProgressBar percent="70" limited />)
  .add('stastics', () => <ProgressBar percent="80" stastics />);

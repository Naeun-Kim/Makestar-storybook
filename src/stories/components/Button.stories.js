import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { withStorySource } from "@storybook/addon-storysource";
import centered from "@storybook/addon-centered";


const Buttons = (
  <>
    <Button color="red">red</Button>
    <Button color="blue">blue</Button>
    <Button color="gray">gray</Button>
    <Button color="darkgray">darkgray</Button>
    <Button color="info">info</Button>
    <Button color="success">success</Button>
    <Button color="warning">warning</Button>
    <Button color="danger">danger</Button>
    <br/><br/>
    <hr/><br/>
    <Button outline>outline</Button>
    <Button outline color="red">outline-red</Button>
    <Button outline color="blue">outline-blue</Button>
    <Button outline color="info">outline-info</Button>
    <Button outline color="success">outline-success</Button>
    <Button outline color="warning">outline-warning</Button>
    <Button outline color="danger">outline-danger</Button>
    <br/><br/>
    <hr/><br/>
    <Button color="blue" size="xs">XS</Button>
    <Button color="blue" size="sm">SM</Button>
    <Button color="blue" size="md">MD</Button>
    <Button color="blue" size="lg">LG</Button>
    <Button color="blue" size="xl">XL</Button>
    <br/><br/>
    <hr/><br/>
    <Button color="red" disabled>disabled</Button>
    <Button outline disabled>outline disabled</Button>
  </>
)

const Sizes = (
  <>
    <Button color={select} size="xs">XS</Button>
    <Button color="blue" size="sm">SM</Button>
    <Button color="blue" size="md">MD</Button>
    <Button color="blue" size="lg">LG</Button>
    <Button color="blue" size="xl">XL</Button>
  </>
)

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('All', () => Buttons)
  .add('Primary', () => {
      const colorLabel = 'Colors';
      const sizeLabel = 'Sizes';
      const colors = {
          Red: 'red',
          Blue: 'blue',
          Gray: 'gray',
          DarkGray: 'darkgray',
          Info: 'info',
          Success: 'success',
          Warning: 'warning',
          Danger: 'danger',
          None: 'gray'
      }
      const sizes = {
          XL: 'xl',
          LG: 'lg',
          MD: 'md',
          SM: 'sm',
          XS: 'xs'
      }
      const defaultColor = 'red';
      const defaultSize = 'md';
      const colorValue = select(colorLabel, colors, defaultColor);
      const sizeValue = select(sizeLabel, sizes, defaultSize);
      return (
        <Button color={colorValue} size={sizeValue} disabled={boolean('Disabled', false)}>{colorValue}-{sizeValue}</Button>
      )
  })
  .add('Outline', () => {
      const colorLabel = 'Colors';
      const sizeLabel = 'Sizes';
      const colors = {
          Red: 'red',
          Blue: 'blue',
          Gray: 'gray',
          DarkGray: 'darkgray',
          Info: 'info',
          Success: 'success',
          Warning: 'warning',
          Danger: 'danger',
          None: 'gray'
      }
      const sizes = {
          XL: 'xl',
          LG: 'lg',
          MD: 'md',
          SM: 'sm',
          XS: 'xs'
      }
      const defaultColor = 'red';
      const defaultSize = 'md';
      const colorValue = select(colorLabel, colors, defaultColor);
      const sizeValue = select(sizeLabel, sizes, defaultSize);
      return (
        <Button outline color={colorValue} size={sizeValue} disabled={boolean('Disabled', false)}>{colorValue}-{sizeValue}</Button>
      )
  })
  .add('arrow', () => <Button arrow color="darkgray"><span>arrow</span></Button>)
  .add('shadow', () => <Button shadow color="info">shadow</Button>)


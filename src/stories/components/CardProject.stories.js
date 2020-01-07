import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, number } from "@storybook/addon-knobs";
import { withStorySource } from "@storybook/addon-storysource";
import centered from "@storybook/addon-centered";
import CardProject from './CardProject';


storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('project', () => {
    //label
    //default option
    //option object
    //value by knobs
    const layoutLabel = 'Layouts';
    const dayLabel = 'D-Day';
    const priceLabel = 'Price'
    const percentLabel = 'Percent';
    const nameLabel = 'Name';
    const descLabel = 'Description';
    const defaultLayout = 'md';
    const defaultDay = 20;
    const defaultPrice = 100000;
    const defaultPercent = 50;
    const defaultName = 'Name';
    const defaultDesc = 'Lorem ipsum dolor sit ame consectetur #adipisicing. elit, sed do eiusmod tempor #ncididunt #labore et dolore magna aliqua. Ut enim ad minim... veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in';
    const layouts = {
      XL: 'xl',
      MD: 'md',
      XS: 'xs',
      Row: 'row'
    }
    const percent = {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }
    const layoutValue = select(layoutLabel, layouts, defaultLayout);
    const dayValue = number(dayLabel, defaultDay);
    const priceValue = number(priceLabel, defaultPrice);
    const percentValue = number(percentLabel, defaultPercent, percent);
    const nameValue = text(nameLabel, defaultName);
    const descValue = text(descLabel, defaultDesc);
    return (
      <CardProject day={dayValue} percent={percentValue} price={priceValue} layout={layoutValue} name={nameValue} description={descValue} />
    )
  })
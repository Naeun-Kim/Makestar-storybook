import React from "react";
import Thumbnail from "./Thumbnail";
import Content from "./Content";
import Title from "./Title";
import Description from "./Description";
import Progress from "./Progress";
import Meta from "./Meta";
import LabelGrp from "./LabelGrp";
import Label from "./Label";

function Card(props) {
  const {
    layout,
    layoutMobile,
    magazine,
    poll,
    square,
    thumbnail,
    title,
    description,
    progress,
    meta,
    labelgrp,
  } = props;
  return (
    <div
      className={
        `card card-${layout}` +
        (layoutMobile ? ` card-${layoutMobile}` : "") +
        (magazine ? " card-magazine" : "") +
        (poll ? " poll" : "") +
        (square ? " square" : "")
      }
    >
      {labelgrp && (
        <LabelGrp>
          <Label/>
        </LabelGrp>
      )}
      {thumbnail && (
        <Thumbnail />
      )}
      <Content>
        {title && (
          <Title/>
        )}
        {description && (
          <Description/>
        )}
        {progress && (
          <Progress/>
        )}
        {meta && (
          <Meta/>
        )}
      </Content>
    </div>
  );
}

export default Card;

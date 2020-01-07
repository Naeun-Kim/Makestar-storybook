import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './card/Thumbnail';
import Content from './card/Content';
import Title from './card/Title';
import Description from "./card/Description";
import Progress from "./card/Progress";
import TransitionLazyLoad from './TransitionLazyLoad';
import ProgressBar from './ProgressBar';


function CardProject(props) {
  const { imageUrl, day, name, description, price, percent, layout } = props;
  return (
    <div className={`card card-project card-${layout}`}>
      <Thumbnail>
        {/*<TransitionLazyLoad*/}
        {/*  offset={100}*/}
        {/*  offsetLeft={0}*/}
        {/*  height={"100%"}*/}
        {/*  width={"100%"}*/}
        {/*  throttle={1}*/}
        {/*>*/}
        <div>
          <img src={imageUrl} alt={name}/>
        </div>
        {/*</TransitionLazyLoad>*/}
      </Thumbnail>
      <Content>
        <span className="dday">D-{day}</span>
        <Title>
          <div>{name}</div>
        </Title>
        {layout !== "xl" && (
        <Description>{description}</Description>
        )}
        <Progress>
          <>
            <span className="price">₩{price}</span>
            {/*<span className="percent">{percent.toFixed(0)}%</span>*/}
            <span className="percent">{percent}%</span>
            <ProgressBar percent={percent} />
          </>
        </Progress>
      </Content>
    </div>
  )
}

CardProject.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  percent: PropTypes.number
}

CardProject.defaultProps = {
  imageUrl: '/images/example.jpeg', //put the placeholder image
  name: 'Makestar',
  description: 'Lorem ipsum dolor sit ame consectetur #adipisicing. elit, sed do eiusmod tempor #ncididunt #labore et dolore magna aliqua. Ut enim ad minim... veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
  percent: 0
}

export default CardProject;
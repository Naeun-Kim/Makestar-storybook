import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './card/Thumbnail';
import Content from './card/Content';
import Title from './card/Title';
import Meta from "./card/Meta";
import TransitionLazyLoad from './TransitionLazyLoad';

function CardProject(props) {
  const { imageUrl, title, commentCount, voteCount, status } = props;
  return (
    <div className={`card card-poll`}>
      <Thumbnail>
        <TransitionLazyLoad
          offset={100}
          offsetLeft={0}
          height={"100%"}
          width={"100%"}
          throttle={1}
        >
          <img src={imageUrl} alt={title}/>
        </TransitionLazyLoad>
        <div className="cover">
          <div className="info">
            <span className="comment">{commentCount}</span>
            <span className="voted">{voteCount}</span>
          </div>
        </div>
      </Thumbnail>
      <Content styleName="poll">
        <span className={status === 'Open' ? 'dday' : 'dday disabled'}>
          {status === 'Open' ? <FormattedMessage id={`${locale}.poll.on`}/> :
            status === 'Closed' ? <FormattedMessage id={`${locale}.poll.off`}/> : status
          }
        </span>
        <Title>
          <div>{title}</div>
        </Title>
        <Meta>
          <span className="frequency">
            <FormattedMessage id={propsToObject[poll.votingType].messageId}/>
          </span>
        </Meta>
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
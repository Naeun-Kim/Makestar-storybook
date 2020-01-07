import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { withStorySource } from "@storybook/addon-storysource";
import centered from "@storybook/addon-centered";


//이거 한 번 새로고침해야
//knobs가 인식되고
//그나마도 동작하지 않는 이유는
//예측하건데, storiesOf 밖에 있기 때문인 것 같다.
//그러면 안쪽에서 map을 돌릴 수 있으면 되는데
//그 방법을 아직 모르겠다.

const FakeImages = [
  {
    name: "Miyah Myles",
    email: "miyah.myles@gmail.com",
    position: "Senior Developer",
    photo: "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
  },
  {
    name: "June Cha",
    email: "june.cha@gmail.com",
    position: "Delivery Driver",
    photo: "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
  },
  {
    name: "Iida Niskanen",
    email: "iida.niskanen@gmail.com",
    position: "Manager",
    photo: "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
  },
  {
    name: "Renee Sims",
    email: "renee.sims@gmail.com",
    position: "Project Manager",
    photo: "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
  },
  {
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    position: "player",
    photo: ''
  },
  {
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    position: "player",
    photo: ''
  },
  {
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    position: "player",
    photo: ''
  },
  {
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    position: "player",
    photo: ''
  },
  {
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    position: "player",
    photo: ''
  }
]

const Avatars = (
  <>
    {FakeImages.map((item, i) => {
      const sizeLabel = 'Sizes';
      const sizes = {
        32: 32,
        36: 36,
        40: 40,
        48: 48
      };
      const defaultSize = 40;
      const sizeValue = select(sizeLabel, sizes, defaultSize);
      return (
        <Avatar size={sizeValue} name={item.name} imageUrl={item.photo} key={`user-${i}`}/>
      )
    })}
    <Avatar size="40" more />
    {/*이거 size size value랑 연결해야 됨*/}
    </>
)

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Default', () => Avatars)
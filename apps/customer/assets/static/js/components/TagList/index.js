import React from 'react';
import Wrapper from './Wrapper';
import Icon from './Icon';
import Tag from './Tag';
import MdLabelOutline from 'react-icons/lib/md/label-outline';
const TagList = ({tags}) => {
  return(
    <Wrapper>
      <Icon><MdLabelOutline style={{width: '100%', height: '100%'}}/></Icon>
      {tags.map((tag, index) => {
        return <Tag key={index}>{tag}</Tag>
      })}
    </Wrapper>
  )

}


export default TagList;
import React from 'react';
import {connect} from 'react-redux';
import {selectDirecorySections} from '../../redux/directory/directory.selectors'
import {createStructuredSelector} from 'reselect'
import '../directory/directory.scss';
import MenuItem from '../menu-item/menu-item';

const Directory = ({section}) => (
  <div className='directory-menu'>
    {section.map(({ id, ...sectionProps }) =>
    (<MenuItem key={id} {...sectionProps}/>))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  section: selectDirecorySections
})

export default connect(mapStateToProps)(Directory)

import React from 'react' ;
import { Image } from 'react-bootstrap'

const RoomLayoutCard = ({ classname, id, title, img, layoutClickHandler}) => {

    return (
        <div className= {classname} id = {id} onClick = { () => layoutClickHandler(id) }>
            <Image className="layout-img" src={ img } />
            <div className = 'layout-text'>{ title }</div>
        </div>
    ) ;
}

export default RoomLayoutCard ;
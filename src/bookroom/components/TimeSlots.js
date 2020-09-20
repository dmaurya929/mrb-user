import React from 'react' ;
import { Button } from 'react-bootstrap'

const TimeSlots = ({ hourSlots, hourSlotHandler }) => {
    
    //const duration = {"08:00-09:00":true,"09:00-10:00":true,"11:00-12:00":true,"12:00-13:00":false,"13:00-14:00":true,"14:00-15:00":true,"15:00-16:00":true,"16:00-17:00":false,"17:00-18:00":false,"18:00-19:00":false,"19:00-20:00":false,"20:00-21:00":false,"21:00-22:00":false,"22:00-23:00":false} ;
    const duration = ["08:00-09:00","09:00-10:00","11:00-12:00","12:00-13:00","13:00-14:00","14:00-15:00","15:00-16:00","16:00-17:00","17:00-18:00","18:00-19:00","19:00-20:00","20:00-21:00","21:00-22:00","22:00-23:00"] ;

    console.log(hourSlots) ; 

   

    const fromToList = duration.map( (d,i) => <Button 
                                            className="hour-slot mr-2 mb-2"
                                            variant="outline-primary"
                                            key={i}
                                            id = {i}
                                            disabled={(hourSlots[i] ==='0')}
                                            onClick = { (evt) => hourSlotHandler(evt, i) }
                                            >{d}</Button>) ;
                                        
                                        
    return (
        <>
        {fromToList}
        </>
    )
}

export default TimeSlots ;
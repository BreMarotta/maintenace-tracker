import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useDesign = (props) => {
    const [designObj, setDesignObj] = useState({})
    const designInArray = useSelector(state => state.design.design[0])
    const designAsObj = useSelector(state => state.design.design)
 
    useEffect(() => {
        if (designInArray == undefined){
            setDesignObj(designAsObj)
        } else {
            setDesignObj(designInArray)
        }
    }, [designInArray, designAsObj])
  return (
    designObj
  )
}


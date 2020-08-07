import React from 'react';

import Card from "@material-ui/core/Card";
const projectInfo = (props) =>{
    console.log(props.info)
    return(<>
    <Card>
        {props.info}
    </Card>
    </>)
}

export default projectInfo
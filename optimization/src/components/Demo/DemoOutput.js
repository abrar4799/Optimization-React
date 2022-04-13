import React from "react";

const DemoOutput = props => {
    /**
     * React Memo used in Functional component Only!
     * React mome compare Props with prev Props and 
     * Re-exectued Component only when props is chnaged
     */
    return <p>{props.show ? 'This is new!' : ''}</p>
}
export default React.memo(DemoOutput);
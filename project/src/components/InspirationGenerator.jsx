import * as React from 'react'
import quotes from './quote'
import FancyText from './fancyText'


function Generator({children}){
    const [idx,setidx] = React.useState(0)
    const currquote=quotes[idx]
    const next=()=>setidx((idx+1)%quotes.length);
    return(
        <>
        <p>Your Quote is:</p>
        <FancyText text={currquote}/>
        <button onClick={next}>Inspire me again</button>
        {children}
        </>
    )
}
export default Generator
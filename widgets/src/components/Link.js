import React from 'react'


const Link=({className,href,children})=>{

        
    const onclick=(e)=>{

        if(e.metaKey || e.ctrlKey)
        {
            return;
        }

        console.log(e);
        e.preventDefault();
        window.history.pushState({},'',href)

        const navEvent=new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return <a onClick={(e)=>onclick(e)} href={href} className={className}>{children}</a>
}

export default Link

import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function Technologies()
{
    return(
        <div id="tech">
        <div className='container'>
            <h1>Technologies:</h1>
            <p>
            Instagram (from Facebook) brings you closer to the people and things you love. Connect with friends, share videos and photos of what you’re up to, or see what's new from others all over the world. 
            Explore your social community where you can feel free to be yourself and share everything from Instagram (from Facebook) brings you closer to the people and things you love. Connect with friends, share videos and photos of what you’re up to, or see what's new from others all over the world.your daily moments to life's highlights.
            Explore your social community where you can feel free to be yourself and share everything from Instagram (from Facebook) brings you closer to the people and things you love. Connect with friends, share videos and photos of what you’re up to, or see what's new from others all over the world.your daily moments to life's highlights.
            Explore your social community where you can feel free to be yourself and share everything from Instagram (from Facebook) brings you closer to the people and things you love. Connect with friends, share videos and photos of what you’re up to, or see what's new from others all over the world.your daily moments to life's highlights.
            </p>
            {/*Links to routes*/}
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to="html">HTML</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="javascript">Javascript</Link>
                </li>
            </ul>
            {/*place holder to load selected component*/}
            <Outlet/>
        </div>
        </div>
    )
}
export default Technologies;
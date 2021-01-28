import React from 'react';
import './Body.css';
const body = () =>{
    return(
        <div>
            <h1 id ="h3">Hello I am Body</h1>
            <p is ="p1">This is not required for React but many people find this feature convenient. You can read about the benefits of this approach here. However you should be aware that this makes your code less portable to other build tools and environments than webpack.
            In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified .css file in the build output.
            If you are concerned about using webpack-specific semantics, you can put all your CSS right into src/index.css. It would still be imported from src/index.js, but you could always remove that import if you later migrate to a different build tool.</p>
        </div>
    )
}
export default body;
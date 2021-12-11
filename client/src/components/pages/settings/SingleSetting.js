import './settings.css'
import {useState} from 'react'
import{Link} from 'react-router-dom'


function SingleSetting() {
    const [checked, setChecked] = useState(false);
    
    
    return (
        <div className="policy">
             <h4>Quick note and tricks</h4>
            <div className="policyDesc">
              Once you have registered or created an account, click on the creat tab to create a post and share with friends. Click on the read more button to read more of a users post. Click on view more of the user's post to get acces to more of the user's past posts.
               Enjoy using our app.
            </div>
      
        </div>
    )
}

export default SingleSetting

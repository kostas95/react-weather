import React, {Fragment} from 'react';

function HeaderComponent({onCityChanged}) {
    return (
        <Fragment>
            <span className="header">
                <div>My weather</div>
                <select name="cars" id="cars" onChange={(e) => onCityChanged(e.target.value)}>
                  <option value="athens">Athens</option>
                  <option value="paris">Paris</option>
                  <option value="stockholm">Stockholm</option>
                  <option value="copenhagen">Copenhagen</option>
                </select>
            </span>
        </Fragment>
    );
}

export default HeaderComponent;
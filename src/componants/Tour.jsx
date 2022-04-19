import React, { useState } from 'react'


function Tour({ id, image, price, name, removetour, info }) {

    const [more, setMore] = useState(false);

    return (

        <article className="single-tour w-50 mx-auto">

            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>{more ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setMore(!more)} >
                        { more ? 'show less' : '  read more'}
                    </button>
                </p>

                <button className="delete-btn" onClick={() => removetour(id)}>
                    not interested
                </button>           
                 </footer>
        </article>


    )
}

export default Tour

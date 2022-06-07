import React from 'react';

function Cards(props){
  
    return (

<>

<section>

<div className="Card">

<p>Marca:{props.brand}</p>
<p>Modelo:{props.model}</p>
<p>Ano:{props.year}</p>

</div>

</section>

</>

    )
}

export default Cards;
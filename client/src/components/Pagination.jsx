import React from "react";

export default function Pagination({dogsPerPage, allDogs, pagination, currentDogs}) {
    const pageNumbers = [] 

    for (let i = 1; i <=Math.ceil(allDogs/dogsPerPage); i++) { 
        pageNumbers.push(i)  //pusheo en el arreglo
    }
    return (
        <nav>
            <div className='pagination_container'> 
              {/* <li>
                { pageNumbers && pageNumbers.map((number, i) => (
                     <button className='pagination' key={i} onClick={() => pagination(number)}>{number}</button>
                ))}
                </li> */}
            </div>

        </nav>
    )

    
}
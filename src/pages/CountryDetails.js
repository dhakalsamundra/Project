import React from 'react'
import { useHistory, useParams } from 'react-router-dom'



import { useSelector } from 'react-redux'

import { Button } from '@material-ui/core'



const CountryDetails = () => {
  const { name } = useParams()
  const history = useHistory()

  // const url = window.location.href;
  // const name = url.split('http://localhost:3000/').join('')
  // console.log('slice', name)

  const countries = useSelector((state) => state.countries.list)
  const country = countries.find(
    (country) => country.name.toLowerCase() === name.toLowerCase()
  )

  const changePageToHome = () => {
    history.push('/')
  }

  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={changePageToHome}
        >
              Home
        </Button>
      </div>
      <section>
        <img src={country.flag} alt="flag of that country" width="250px" />
        <h1>{country.name}</h1>
        <p>
          Population of this country is : {country.population} and is situated
          in <br />
          {country.region} and <br />
          {country.subregion}
        </p>
      </section>
    </div>
  )
}

export default CountryDetails

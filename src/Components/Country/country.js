import React, { useEffect, useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { TableHead, TableRow, TableCell, Button } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { Table, TableBody } from '@material-ui/core'


import themeContext from '../../themeContext'
import {
  fetchCountry,
  addCountry,
  SortCountries,
} from '../../redux/actions/CountryAction'
import './country.scss'

const CountryLists = () => {
  const dispatch = useDispatch()
  const [change, setChange] = useState(true)
  const { theme } = useContext(themeContext)

  useEffect(() => {
    dispatch(fetchCountry())
  }, [dispatch])

  const searchCountries = useSelector(
    (state) => state.countries.filteredList
  )
  const handleAddToCart = (element) => {
    dispatch(addCountry(element))
  }

  const handleChangeOrder = () => {
    dispatch(SortCountries())
    setChange((prevValue) => !prevValue)
  }

  return (
    <div>
      <Table>
        <TableHead className="country__labels">
          <TableRow>
            <TableCell className="country__flag">Flag</TableCell>
            <TableCell className="country__name">
            Name
              <button onClick={handleChangeOrder}>
                <span>
                  {change ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                </span>
              </button>
            </TableCell>

            <TableCell className="country__lang">Languages</TableCell>
            <TableCell className="country__population">Population</TableCell>
            <TableCell className="country__region">Region</TableCell>
          </TableRow>
        </TableHead>
      </Table>

      {searchCountries.map((element, name) => (
        <TableBody key={name}>
          <TableRow>
            <TableCell className="countries">
              <img
                src={element.flag}
                style={{ width: '80px' }}
                alt={element.name}
                className="countries__country__flag"
              />
            </TableCell>

            <TableCell className="countries__name">
              <Link to={`/${element.name}`}>{element.name}</Link>
            </TableCell>
            <TableCell className="countries__lang">
              {element.languages.map((element) => (
                <li key={element.name}> {element.name}</li>
              ))}
            </TableCell>
            <TableCell className="countries__pop">
              {element.population.toLocaleString()}
            </TableCell>
            <TableCell className="countries__region">{element.region}</TableCell>
            <TableCell className="countries__button">
              <Button
                variant="contained"
                className="Add"
                color="primary"
                style={{ backgroundColor: theme.code }}
                onClick={() => handleAddToCart(element)}
              >
              Add
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      ))}
    </div>
  )
}

export default CountryLists

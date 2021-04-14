import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddKeyButton from './AddKeyButton';
import Button from 'react-bootstrap/Button'
import RefreshButton from './RefreshButton';
import EditButton from './EditButton';
import Navigation from './Navigation'
import Container from 'react-bootstrap/Container'
import VerifyButton from './VerifyButton'
const axios = require('axios')



function KeyList(props) {
  const [keys, setKeys] = useState([])
  let count = 0
  const [refresh, setRefresh] = useState(count)
  const token = localStorage.getItem('token')

  const getKeys = async () => {
    axios.post(`http://localhost:9001/api/post?token=${token}`).then(function(response) {
        const userKeys  = response.data[0].keys
        setKeys(userKeys)
    }).catch(function(error) {
      console.log(error)
      })
  }

  const refreshPageWithState = () => {
    window.location.reload()
  }
  
  useEffect(() => {
    getKeys()
  }, [])

return (
  <div>
    <Navigation history={props.history}></Navigation>
    <Container>
    <AddKeyButton id={"AddKeyBtn"} cb={refreshPageWithState}/>
    <Table  hover responsive>
      <thead bordered>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th colspan="4">Expires</th>
        </tr>
      </thead>
        {
          keys.map((key) => {
            const {name, description, expires} = key
            return (
              <tbody>
                <tr>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>{expires}</td>
                  <td ><RefreshButton name={name} description={description} expires={expires}/></td>
                  <td><EditButton className="btn" name={name} description={description} expires={expires}></EditButton></td>
                  <td><VerifyButton name={name}></VerifyButton></td>
                </tr>
              </tbody>
            )
          })
        }
      </Table>
      </Container>
    </div>
  )
}

export default KeyList 
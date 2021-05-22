import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import { Container } from "reactstrap"
export default function Dashboard() {
    const[error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Faild to log out')
        }
    }
    return (
        <>
                <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Welcome to Momentwala Photo Gellary</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <h3><strong>Your Email Address: </strong>{currentUser.email}. Now you can visite all page of Momentwala</h3>
                    <Link to="/menu" className="btn btn-primary w-100 mt-3">
                        View Random Photo
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
            </div>
            </Container>
        </>
    )
}

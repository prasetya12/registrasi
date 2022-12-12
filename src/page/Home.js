import React from 'react'
import Button from 'react-bootstrap/Button';
import Layout from '../layouts/Layout';
import { Outlet, Link, useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/registrasi`;
        navigate(path);
    }
    return (
        <>
            <Layout>
                <div>
                    Home
                    <Button color="primary" className="px-4"
                        onClick={routeChange}
                    >
                        Registrasi
                    </Button>
                </div>
            </Layout>


        </>
    )
}


export default Home
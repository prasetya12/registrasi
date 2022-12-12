import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Layout from '../layouts/Layout'
import Card from 'react-bootstrap/Card';
import DatePicker from "react-widgets/DatePicker";
import Form from 'react-bootstrap/Form';

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

var validate = require("validate.js");
const firebaseConfig = {
    apiKey: "AIzaSyBDenJ38FyzAKCvkxk4hN3vBXM87JmjdCo",
    authDomain: "tugas-ec19d.firebaseapp.com",
    projectId: "tugas-ec19d",
    storageBucket: "tugas-ec19d.appspot.com",
    messagingSenderId: "954650998626",
    appId: "1:954650998626:web:d2f30ad477568db7981e3b",
    measurementId: "G-JL3D7ELETC"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage();


const Registrasi = () => {


    const [name, setName] = useState(null)
    const [gender, setGender] = useState(null)
    const [datebirth, setDatebirth] = useState(null)
    const [address, setAddress] = useState(null)

    const [image, setImage] = useState(null)
    const [cv, setCv] = useState(null)
    const [sertifikat, setSertifikat] = useState(null)

    const [imageurl, setImageurl] = useState(null)
    const [cvurl, setCvurl] = useState(null)
    const [sertifikasiurl, setSertifikasiurl] = useState(null)









    const constraints = {
        name: { presence: true },
        gender: { presence: true },
        datebirth: { presence: true },
        address: { presence: true },
        image: { presence: true },
        cv: { presence: true },
        sertifikat: { presence: true }
    }

    const submitButton = async () => {
        const value = {
            name,
            gender,
            datebirth,
            address,
            image: imageurl,
            cv: cvurl,
            sertifikat: sertifikasiurl
        }
        console.log(value)

        // try {
        //     await addDoc(collection(db, 'registrasi'), value)
        // } catch (err) {
        //     alert(err)
        // }



        const isValidate = validate(value, constraints)
        console.log(isValidate, 'halo')

    }

    const clickGender = (e) => {
        setGender(e.target.value)
    }

    const handleImage = (e) => {
        const image = e.target.files[0]

        const imageRef = ref(storage, `/images/${image.name}`)


        uploadBytes(imageRef, image).then((snapshot) => {
            getDownloadURL(imageRef).then((url) => {
                setImageurl(url)
            })
            console.log(snapshot, 'halo')
            console.log('Uploaded a blob or file!');
        });

        console.log(imageRef, 'halo')
    }

    const handleCv = (e) => {
        const cv = e.target.files[0]

        const cvRef = ref(storage, `/images/${cv.name}`)

        uploadBytes(cvRef, image).then((snapshot) => {
            getDownloadURL(cvRef).then((url) => {
                setCvurl(url)
            })
        });

    }

    const handleSertifikasi = (e) => {
        const sertifikasi = e.target.files[0]

        const sertifikasiRef = ref(storage, `/images/${sertifikasi.name}`)

        uploadBytes(sertifikasiRef, image).then((snapshot) => {
            getDownloadURL(sertifikasiRef).then((url) => {
                setSertifikasiurl(url)
            })
        });

    }






    return (
        <>
            <Layout>
                <div className='d-flex align-items-center mt-5 font-weight-bold flex-column'>
                    <h2> Formulir Pendaftaran Team 3</h2>
                    <div className='d-flex w-100 '>
                        <Card className='d-flex w-100 p-4 mt-3' >
                            <form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Masukan Nama" value={name} onChange={(e) => { setName(e.target.value) }} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <label for="exampleInputEmail1">Jenis Kelamin</label>
                                    <div className='mt-2'>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" onChange={(e) => clickGender(e)}>
                                            </input>

                                            <label class="form-check-label" for="inlineRadio1">Laki-Laki</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" onChange={(e) => clickGender(e)}>
                                            </input>

                                            <label class="form-check-label" for="inlineRadio2">Perempuan</label>

                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">

                                    <Form.Label>Tanggal Lahir</Form.Label>

                                    <DatePicker className="mt-2" placeholder="mm/dd/yy" value={datebirth}
                                        onChange={value => setDatebirth(value)} />
                                </Form.Group>

                                <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Alamat</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={address} onChange={e => setAddress(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formFile" className="mt-3">
                                    <Form.Label>Foto</Form.Label>
                                    <Form.Control type="file" onChange={handleImage} />
                                </Form.Group>
                                <Form.Group controlId="formFile" className="mt-3">
                                    <Form.Label>CV</Form.Label>
                                    <Form.Control type="file" onChange={handleCv} />
                                </Form.Group>
                                <Form.Group controlId="formFile" className="mt-3">
                                    <Form.Label>Sertifikat</Form.Label>
                                    <Form.Control type="file" onChange={handleSertifikasi} />
                                </Form.Group>
                            </form>
                        </Card>
                    </div>
                    <div className="mt-3 " gap={3}>
                        <Button variant="danger">Reset</Button>
                        <Button className="button-submit" variant="primary" onClick={submitButton} >Submit</Button>

                    </div>
                </div>
            </Layout>

        </>
    )
}


export default Registrasi
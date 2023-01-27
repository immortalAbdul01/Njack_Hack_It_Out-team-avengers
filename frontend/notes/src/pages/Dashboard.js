import React, { useState } from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
// import Navbar from './Navbar';
export const DashBoard = () => {

    // Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // for onchange event
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfFileError, setPdfFileError] = useState('');

    // for submit event
    const [viewPdf, setViewPdf] = useState(null);

    // onchange event
    const fileType = ['application/pdf'];
    const handlePdfFileChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    setPdfFile(e.target.result);
                    setPdfFileError('');
                }
            }
            else {
                setPdfFile(null);
                setPdfFileError('Please select valid pdf file');
            }
        }
        else {
            console.log('select your file');
        }
    }

    // form submit
    const handlePdfFileSubmit = (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile);
        }
        else {
            setViewPdf(null);
        }
    }

    return (
        <div>

            <section id="title">


                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg navbar-dark">
                        <a class="navbar-brand" href="">KeepNotes</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/logIn">Download</a>
                                </li>
                            </ul>


                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>




                <div class="row">
                    <div class="col-lg-6">
                        <h1>Keep your notes simple and safe.</h1>
                        <button type="button" class="btn btn-light btn-lg D-button"> <a href="/login">Login</a> </button>
                        <button type="button" class="btn btn-light btn-lg D-button"><a href="/sign"> Sign In </a></button>
                    </div>
                    <div class="col-lg-6">
                        <img class="title-image" src="https://i.dawn.com/primary/2015/02/54d4a75555fc5.gif" alt="notes" />
                    </div>
                </div>
            </section>

            <div className='container'>

                <br></br>

                <form className='form-group' onSubmit={handlePdfFileSubmit}>
                    <input type="file" className='form-control'
                        required onChange={handlePdfFileChange}
                    />
                    {pdfFileError && <div className='error-msg'>{pdfFileError}</div>}
                    <br></br>
                    <button type="submit" className='btn btn-success btn-lg'>
                        UPLOAD
                    </button>
                </form>
                <br></br>
                <h4>View PDF</h4>
                <div className='pdf-container'>
                    {/* show pdf conditionally (if we have one)  */}
                    {viewPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                        <Viewer fileUrl={viewPdf}
                            plugins={[defaultLayoutPluginInstance]} />
                    </Worker></>}

                    {/* if we dont have pdf or viewPdf state is null */}
                    {!viewPdf && <>No pdf file selected</>}
                </div>

            </div>
            <button className='btn btn-success btn-lg'> <a href="/notes"> Click here to make sticky notes</a></button>
        </div>

    )
}

export default DashBoard
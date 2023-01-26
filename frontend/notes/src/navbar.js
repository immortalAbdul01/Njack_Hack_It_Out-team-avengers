import React from 'react'

export default function navbar() {
    return (

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
                                <a class="nav-link" href="">Download</a>
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
                    <button type="button" class="btn btn-dark btn-lg D-button"><i class="fab fa-apple"></i>Download</button>
                    <button type="button" class="btn btn-outline-light btn-lg D-button"><i
                        class="fab fa-google-play"></i>Download</button>
                </div>
                <div class="col-lg-6">
                    <img class="title-image" src="https://i.dawn.com/primary/2015/02/54d4a75555fc5.gif" alt="notes" />
                </div>
            </div>
        </section>

    )
}

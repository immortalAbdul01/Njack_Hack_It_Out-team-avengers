import React from 'react'
import './features.css'
export default function Features() {
    return (
        <div>

            <h1>Our Features</h1>
            <div class="features-section">
                <div class="feature-box">
                    <img src="https://th.bing.com/th/id/R.d5a3048104314007b572970613d9df52?rik=VcUNOESRF061gA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fbTy%2fLAo%2fbTyLAoXTL.jpeg&ehk=h1L%2bzmmup1ioLsUQuB4swnRxSQMeMEHkG%2bRlLZY3vc8%3d&risl=&pid=ImgRaw&r=0" alt="Feature 1" />
                    <h3>Sticky Notes</h3>
                    <p>Our website offers a unique feature that allows users to create and customize their own sticky notes. With the ability to choose from a wide range of amazing colors,</p>
                    <a href="/notes" class="feature-link">Learn More</a>
                </div>
                <div class="feature-box">
                    <img src="https://th.bing.com/th/id/R.7a2c8d275e36a182dac670436548cb30?rik=ZGLO74EFvcVB5w&riu=http%3a%2f%2fwww.psdgraphics.com%2fwp-content%2fuploads%2f2011%2f06%2fwhite-board.jpg&ehk=UKBaNUAX5LT%2fc1qp46YPC6NCC8RWVEMzAZuY3XRFvqM%3d&risl=&pid=ImgRaw&r=0" alt="Feature 2" />
                    <h3>A Whiteboard</h3>
                    <p>Our customized whiteboard feature in our notes website allows users to easily create and organize diagrams, flowcharts, and other visual aids. Users can choose from a variety of drawing tools and colors</p>
                    <a href="/white" class="feature-link">Learn More</a>
                </div>
                <div class="feature-box">
                    <img src="https://th.bing.com/th/id/OIP.wnC1jryenbHHId_IYoFUYQHaHx?pid=ImgDet&rs=1" alt="Feature 3" />
                    <h3>Notes with Images, Links and Text</h3>
                    <p>Our app allows you to easily create and save notes using a combination of text, images, and links. Organize your thoughts and ideas with our user-friendly interface and easily access your notes whenever you need them.</p>
                    <a href="/image" class="feature-link">Learn More</a>
                </div>
            </div>
        </div>
    )
}

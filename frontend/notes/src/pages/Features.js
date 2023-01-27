import React from 'react'
import './features.css'
export default function Features() {
    return (
        <div class="features-section">
            <div class="feature-box">
                <img src="https://th.bing.com/th/id/R.d5a3048104314007b572970613d9df52?rik=VcUNOESRF061gA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fbTy%2fLAo%2fbTyLAoXTL.jpeg&ehk=h1L%2bzmmup1ioLsUQuB4swnRxSQMeMEHkG%2bRlLZY3vc8%3d&risl=&pid=ImgRaw&r=0" alt="Feature 1" />
                <h3>Sticky Notes</h3>
                <p>Our website offers a unique feature that allows users to create and customize their own sticky notes. With the ability to choose from a wide range of amazing colors,</p>
                <a href="/notes" class="feature-link">Learn More</a>
            </div>
            <div class="feature-box">
                <img src="feature2.png" alt="Feature 2" />
                <h3>Feature 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id congue dictum, ipsum magna tincidunt risus, id gravida urna leo quis erat.</p>
                <a href="#" class="feature-link">Learn More</a>
            </div>
            <div class="feature-box">
                <img src="feature3.png" alt="Feature 3" />
                <h3>Feature 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id congue dictum, ipsum magna tincidunt risus, id gravida urna leo quis erat.</p>
                <a href="#" class="feature-link">Learn More</a>
            </div>
        </div>
    )
}

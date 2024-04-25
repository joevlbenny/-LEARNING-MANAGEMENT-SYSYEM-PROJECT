import React from 'react';
import './Cards.css';
function BasicExample() {
    return (
        <div class="card-group">

            <div class="card" >
                <img src="https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Deep learning</h5>
                    <p class="card-text">Deep learning is a subset of machine learning, a field of artificial intelligence (AI) that focuses on training algorithms to learn patterns and make predictions from data. What sets deep learning apart is its use of artificial neural networks with multiple layers (hence the term "deep") to learn representations of data with varying levels of abstraction. These neural networks, inspired by the structure and function of the human brain, consist of interconnected nodes called neurons organized in layers.</p>
                </div>
                {/* <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
            <div class="card" >
                <img src="https://images.pond5.com/4k-artificial-intelligence-ai-scientific-footage-103578491_prevstill.jpeg " class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Artifical Intelligence</h5>
                    <p class="card-text">As artificial intelligence (AI) continues to revolutionize industries and reshape our everyday lives, the demand for skilled professionals in AI-related fields is on the rise. AI courses offer invaluable opportunities for individuals to acquire the knowledge, skills, and expertise necessary to navigate this dynamic and rapidly evolving field.

                    </p>
                </div>
                {/* <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}

            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGxlYXJuaW5nJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Doubt Clearance</h5>
                    <p class="card-text">Doubt clearance plays a pivotal role in the learning process, enabling individuals to overcome obstacles, gain clarity, and deepen their understanding of complex concepts. Whether in academic settings, professional environments, or personal pursuits, the ability to address uncertainties and resolve queries fosters a conducive learning environment and promotes intellectual growth.</p>
                </div>
                {/* <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
        </div>
    );
}

export default BasicExample;
.slider {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    width: 1000px;
    height: 600px;
    border-radius: 10px;
}

.right-arrow {
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    opacity: 0.8;
}

.left-arrow {
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    opacity: 0.8;
}

.slide {
    opacity: 0;
    transition-duration: 1s ease;
}

.slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
}


@media screen and (max-width: 700px) {
    .image {
        width: 500px;
        height:250px;
        padding: 100px;
        border-radius: 10px;
    }
    
  }

@media screen and (max-width: 900px) {
    .image {
        width: 500px;
        height: 300px;
        padding: 100px;
        border-radius: 10px;
    }
    

  }
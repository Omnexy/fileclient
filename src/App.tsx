import React from 'react';
import './App.css';
import Dropzone from "./Components/Dropzone/Dropzone";
import {contentType, makeURL} from "./utils/URLMaker";

function App() {

    const onAppDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const onAppDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        //e.preventDefault();
        e.stopPropagation();
    }

    const onAppDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const onAppDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        //e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div
            className="App"
            onDrop={e => onAppDrop(e)}
            onDragOver={e => onAppDragOver(e)}
            onDragLeave={e => onAppDragLeave(e)}
            onDragStart={e => onAppDragStart(e)}
        >
            <Dropzone/>
            <img alt={'hehe'} style={{width: '300px'}} src={`${makeURL('Настя Эдуардовна.jpg', contentType.IMG)}`}/>
        </div>
    );
}

export default App;
